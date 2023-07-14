import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading
  } = useContext(AuthContext);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Crea tu cuenta</h1>
          <p className="text-center mb-6">
            Conecta con quien tu quieras, aprende y comparte experiencias y habilidades.
          </p>
          <form onSubmit={registerUser} className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Nombre completo</label>
              <input
                onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })}
                type="text" placeholder="Nombres y Apellidos" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Correo electrónico</label>
              <input
                onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })}
                type="email" placeholder="Ejemplo@gmail.com" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Contraseña</label>
              <input
                onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })}
                type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <button type="submit" className="transition duration-200 bg-accent2 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                {
                  isRegisterLoading ?
                    <span className="inline-block">Creating your account</span>
                    : <span className="inline-block">Continuar</span>
                }
              </button>
              {
                registerError?.error && <div className="w-full mt-2 py-1 rounded-lg text-center bg-red-300 text-red-900">{registerError?.message}</div>
              }
            </div>
          </form>
          <p className="text-center mt-6">¿Aún no tienes una cuenta? Inscribirse.</p>
          <p className="text-center">Al continuar, reconoce y acepta nuestra Política de privacidad y Términos de uso.</p>
        </div>
      </div>
    </>
  )
}

export default Register;