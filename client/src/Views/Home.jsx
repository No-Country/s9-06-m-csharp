import { useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between px-6">
      <div className="h-hull mt-32 text-center">
        <div className="w-32 h-32 radius-2xl border border-solid border-[#2F2F2F] mx-auto flex items-center justify-center">¿logo?</div>
        <h1 className="mt-8 leading-8 text-base font-bold">Aprende y comparte con nuevas amistades</h1>
      </div>
      <div className="h-full mb-4">
        <button onClick={() => navigate("/login")} type="button" className="mb-4 transition duration-200 bg-accent2 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
          <span className="inline-block mr-2">Iniciar sesión</span>
        </button>
        <button onClick={() => navigate("/register")} type="button" className="transition duration-200 bg-accent2 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
          <span className="inline-block mr-2">Registrar ahora</span>
        </button>
      </div>
    </div>
  )
}
export default Home