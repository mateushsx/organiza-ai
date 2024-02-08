import { IoAddSharp } from "react-icons/io5";
import { VscEdit } from "react-icons/vsc";
import { CiTrash } from "react-icons/ci";


export const Tasks = () => {

    return (
        <div className="container mx-auto p-10 flex flex-col items-center">
            <h1 className=" uppercase text-center font-semibold text-cyan-600 text-3xl">Organiza Aí Todo List Demo App</h1>
            <form className=" flex items-center justify-center mt-16">
                <input
                    placeholder="Adicione sua tarefa."
                    type="text"
                    className="outline-none h-11 border-b border-l border-t border-cyan-300 px-3 py-2 w-96 rounded-tl-md rounded-bl-md"
                />
                <button type="submit" className=" flex justify-center items-center border-b border-r border-t border-cyan-300 w-10 bg-green-400 h-11 rounded-tr rounded-br-md"><IoAddSharp className={`  text-white font-bold text-2xl`} /></button>
            </form>

            <table className="table-auto mt-20 border-collapse w-full  text-center">
                <thead className="border-b-2 border-slate-400 ">
                    <tr className=" text-gray-600/80 ">
                        <th className="py-2">#</th>
                        <th className="py-2">Tarefa</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Editar</th>
                        <th className="py-2">Remover</th>

                    </tr>
                </thead>
                <tbody >
                    <tr className=" border-b border-slate-300 ">
                        <td className="py-2">1</td>
                        <td className="py-2">Corrigir bug</td>
                        <td className="py-2 "><button className="border border-yellow-400 text-yellow-400 rounded-md px-3 py-2">Em andamento</button></td>
                        <td className="py-2"><button className="border border-cyan-400 px-3 py-2 rounded-md text-cyan-400"><VscEdit /></button></td>
                        <td className="py-2"><button className="border border-red-400 px-3 py-2 rounded-md text-red-600"><CiTrash /></button></td>
                    </tr>

                    <tr className=" border-b border-slate-300">
                        <td className="py-2">3</td>
                        <td className="py-2">Subir projeto GitHub</td>
                        <td className="py-2 "><button className="border border-green-400 text-green-400 rounded-md px-3 py-2">Completada</button></td>
                        <td className="py-2"><button className="border border-cyan-400 px-3 py-2 rounded-md text-cyan-400"><VscEdit /></button></td>
                        <td className="py-2"><button className="border border-red-400 px-3 py-2 rounded-md text-red-600"><CiTrash /></button></td>
                    </tr>

                    <tr className=" border-b border-slate-300">
                        <td className="py-2">34</td>
                        <td className="py-2">Reunião</td>
                        <td className="py-2 "><button className="border border-yellow-400 text-yellow-400 rounded-md px-3 py-2">Em andamento</button></td>
                        <td className="py-2"><button className="border border-cyan-400 px-3 py-2 rounded-md text-cyan-400"><VscEdit /></button></td>
                        <td className="py-2"><button className="border border-red-400 px-3 py-2 rounded-md text-red-600"><CiTrash /></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};