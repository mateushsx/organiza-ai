import { Link } from 'react-router-dom';
import wallpaperLogin from '../assets/images/wallpaperLogin.jpg';

export const SignIn = () => {
  return (
    <div className="mx-auto flex">
      <div>
        <img src={wallpaperLogin} className=" h-screen max-w-6xl" />
      </div>

      <div className="w-screen items-center justify-center flex flex-col gap-10">
        <h1 className=" font-semibold uppercase text-3xl text-cyan-600">Organiza Aí</h1>
        <form>
          <label className="flex flex-col mb-6">
            <span className="text-gray-400 font-semibold text-lg mb-2">E-mail</span>
            <input
              type="text"
              placeholder="Digite seu email"
              className="w-96 border border-cyan-300 rounded-md px-3 py-2 outline-none"
            />
          </label>

          <label className="flex flex-col mb-6">
            <span className=" text-gray-400 font-semibold text-lg mb-2">Senha</span>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-96 border border-cyan-300 rounded-md px-3 py-2  outline-none"
            />
          </label>

          <p className="mb-5">
            Não tem uma conta?
            <Link to={'/'} className=" ml-2 underline text-cyan-500 font-semibold">
              Inscreva-se
            </Link>
          </p>

          <button
            type="submit"
            className=" uppercase bg-cyan-400 w-96 rounded-3xl px-3 py-2 text-white 
          font-semibold text-xl hover:opacity-85 transition-all duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
