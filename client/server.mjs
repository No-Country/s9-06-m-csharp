import express from 'express'
import http from 'http'
import { Server as SocketIOServer } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new SocketIOServer(server)

const userConnections = {} // Mapeo de ID de usuario a conexión WebSocket

io.on('connection', socket => {
	console.log('Usuario conectado:', socket.id)

	// Manejador de eventos para mensajes recibidos
	socket.on('message', data => {
		const { fromUserId, toUserId, message } = data

		console.log(
			`Mensaje recibido del cliente (usuario ${fromUserId}):`,
			message
		)
		if (userConnections[toUserId]) {
			io.to(userConnections[toUserId]).emit('message', {
				user: fromUserId,
				message,
			})
		}
	})

	// Manejador de eventos para seleccionar un destinatario
	socket.on('selectRecipient', data => {
		const { fromUserId, toUserId } = data

		// Registrar la conexión del destinatario
		userConnections[fromUserId] = socket.id
		userConnections[toUserId] = socket.id
	})

	// Limpieza: desconectar cuando el usuario se vaya
	socket.on('disconnect', () => {
		// Remover el registro de conexión del usuario desconectado
		const disconnectedUserId = Object.keys(userConnections).find(
			userId => userConnections[userId] === socket.id
		)
		if (disconnectedUserId) {
			delete userConnections[disconnectedUserId]
		}
		console.log('Usuario desconectado:', socket.id)
	})
})

const port = 5173 // Cambia el número de puerto si es necesario
server.listen(port, () => {
	console.log(`Servidor WebSocket escuchando en http://localhost:${port}`)
})
