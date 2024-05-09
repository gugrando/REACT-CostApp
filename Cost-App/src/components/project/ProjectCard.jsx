/* eslint-disable no-unused-vars */
import {BsPencil, BsFillTrashFill} from "react-icons/bs"
import {Link} from "react-router-dom"
// eslint-disable-next-line react/prop-types
function ProjectCard ({id, name, budget, category, handleRemove}) {
    const devClass = "bg-green-400 mr-1 w-3 h-3 rounded-md"
    const infraClass = "bg-yellow-400 mr-1 w-3 h-3 rounded-md"
    const designClass = "bg-orange-400 mr-1 w-3 h-3 rounded-md"
    const plannerClass = "bg-purple-400 mr-1 w-3 h-3 rounded-md"

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className="p-4 border-solid border rounded-md m-2 w-1/4 bg-zinc-800">
            <h4 className="bg-zinc-900 text-yellow-500 p-2 mb-5 text-md">{name}</h4>
            <p className="text-zinc-200 mb-4">
                <span className="font-bold">Budget:</span> R${budget}
            </p>
            <p className="flex items-center text-zinc-200 mb-4">
                <span className={category == 'Dev' ? devClass : category == 'Infra' ? infraClass : category == 'Design' ? designClass : category == 'Planner' ? plannerClass : 'bg-zinc-300'}></span> {category}
            </p>
            <div className="mt-5 flex items-center gap-4">
                <Link to={`/project/${id}`} className="w-1/2 border-none bg-zinc-50 hover:bg-zinc-300 text-zinc-900 text-base cursor-pointer border py-2 flex items-center justify-center transition-all">
                    <BsPencil className="w-1/6 mr-2"/> Edit
                </Link >
                <button onClick={remove} className="w-1/2 border-none bg-zinc-50 hover:bg-zinc-300 text-zinc-900 text-base cursor-pointer border py-2 flex items-center justify-center transition-all">
                    <BsFillTrashFill className="w-1/6 mr-2"/> Remove
                </button>
            </div>
        </div>
    )
}
export default ProjectCard

