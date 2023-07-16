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
      <div className="bg-main_color min-h-screen flex flex-col justify-center">
        <div className="xs:p-0 mx-auto md:w-full md:max-w-[390px]">
          <h1 className="font-nunito font-bold text-center text-2xl mb-5 text-[#2f2f2f]">Crea tu cuenta</h1>
          <p className="font-nunitosans text-center text-sm w-[358px] mx-auto mb-6">
            Conecta con quien tu quieras, aprende y comparte experiencias y habilidades.
          </p>
          <form onSubmit={registerUser} className="w-[358px] mx-auto divide-y divide-gray-200">
            <div className="mt-6">
              <label className="font-nunitosans font-bold text-base text-[#2f2f2f] pb-1 block">Nombre completo</label>
              <input
                onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })}
                type="text" placeholder="Nombres y Apellidos" className="h-10 border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <label className="font-nunitosans font-bold text-base text-[#2f2f2f] pb-1 block">Correo electrónico</label>
              <input
                onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })}
                type="email" placeholder="Ejemplo@gmail.com" className="h-10 border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <label className="font-nunitosans font-bold text-base text-[#2f2f2f] pb-1 block">Contraseña</label>
              <input
                onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })}
                type="password" className="h-10 border rounded-lg px-3 py-2 mt-1 mb-5 text-neutral-950 text-sm w-full" />
              <button type="submit" className="transition duration-200 bg-accent2 text-black h-12 w-full p-4 rounded-2xl text-xs shadow-sm hover:shadow-md font-nunitosans text-center font-bold inline-block">
                {
                  isRegisterLoading ?
                    <span>Creating your account</span>
                    : <span>Continuar</span>
                }
              </button>
              {
                registerError?.error && <div className="w-full mt-2 py-1 rounded-lg text-center bg-red-300 text-red-900">{registerError?.message}</div>
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

export default Register;