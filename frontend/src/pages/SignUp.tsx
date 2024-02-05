import { Link } from "react-router-dom";


export const SignUp = () => {


  return (
    <div className="mx-auto flex">
      <div className=" bg-cyan-600 h-[100vh] w-[50vw]
      items-center justify-center flex flex-col gap-5
      ">
        <h1 className="text-white font-semibold text-3xl uppercase">Bem vindo de volta</h1>
        <p className="text-white font-semibold text-lg">Já possui uma conta? Clique no botão abaixo.</p>
        <button className=" text-cyan-500 uppercase border border-white
         bg-white w-60 rounded-3xl px-3 py-2 font-semibold text-lg hover:opacity-90 transition-all duration-300">
          <Link to={'/signin'}> Entrar</Link>
        </button>
      </div>

      <div className="h-[100vh] w-[50vw] items-center justify-center flex flex-col gap-10">
        <h1 className=" font-semibold uppercase text-3xl text-cyan-600">
          Organiza Aí
        </h1>
        <form>

          <label className="flex flex-col mb-6">
            <span className="text-gray-400 font-semibold text-lg mb-2">
              Nome
            </span>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-96 border border-cyan-300 rounded-md px-3 py-2 outline-none"
            />
          </label>

          <label className="flex flex-col mb-6">
            <span className="text-gray-400 font-semibold text-lg mb-2">
              E-mail
            </span>
            <input
              type="text"
              placeholder="Digite seu email"
              className="w-96 border border-cyan-300 rounded-md px-3 py-2 outline-none"
            />
          </label>

          <label className="flex flex-col mb-6">
            <span className=" text-gray-400 font-semibold text-lg mb-2">
              Senha
            </span>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-96 border border-cyan-300 rounded-md px-3 py-2  outline-none"
            />
          </label>

          <button
            type="submit"
            className=" uppercase bg-cyan-400 w-96 rounded-3xl px-3 py-2 text-white 
          font-semibold text-xl hover:opacity-85 transition-all duration-300"
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
};
