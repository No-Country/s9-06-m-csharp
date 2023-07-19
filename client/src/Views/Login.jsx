import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

const Login = () => {
  const {
    loginUser,
    loginError,
    loginInfo,
    updateLoginInfo,
    isLoginLoading
  } = useContext(AuthContext);

  return (
    <>
      <div className="bg-main_color min-h-screen flex flex-col justify-center">
        <div className="xs:p-0 mx-auto md:w-full md:max-w-[390px]">
          <h1 className="font-nunito font-bold text-center text-2xl mb-2">Inicia Sesión</h1>
          <p className="font-nunitosans text-center text-sm w-[358px] mx-auto mb-6">
            Conecta con quien tu quieras, aprende y comparte experiencias y habilidades.
          </p>
          <form onSubmit={loginUser} className="w-[358px] mx-auto divide-y divide-gray-200">
            <div className="mt-6">
              <label className="font-nunitosans font-bold text-base text-[#2f2f2f] pb-1 block">Correo electrónico</label>
              <input
                onChange={(e) => updateLoginInfo({ ...loginInfo, email: e.target.value })}
                type="email" placeholder="Ejemplo@gmail.com" className="h-10 border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <label className="font-nunitosans font-bold text-base text-[#2f2f2f] pb-1 block">Contraseña</label>
              <input
                onChange={(e) => updateLoginInfo({ ...loginInfo, password: e.target.value })}
                type="password" autoComplete="on" placeholder="Password" className="h-10 border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <p className="font-nunitosans text-xs mb-4">¿Se te olvidó tu contraseña?</p>
              <button type="submit" className="transition duration-200 bg-accent2 text-black h-12 w-full p-4 rounded-2xl text-xs shadow-sm hover:shadow-md font-nunitosans text-center font-bold inline-block">
                {
                  isLoginLoading ? <span>Registrandote...</span> : <span>Continuar</span>
                }
              </button>
              {
                loginError?.error && <div className="w-full mt-2 py-1 rounded-lg text-center bg-red-300 text-red-900">{loginError?.message}</div>
              }
            </div>
          </form>
          <p className="font-nunitosans text-xs text-center mt-6 text-[#2f2f2f]">¿Aún no tienes una cuenta? Inscribirse.</p>
          <p className="font-nunitosans text-xs text-center text-[#2f2f2f]">Al continuar, reconoce y acepta nuestra Política de privacidad y Términos de uso.</p>
        </div>
      </div>
    </>
  )
}

export default Login;