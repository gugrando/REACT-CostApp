/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {BsFillTrashFill} from "react-icons/bs"
function ServiceCard ({id, name, cost, description, handleRemove}) {
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
        console.log("chegou aqui")
    }
    
    return (
        <div className="p-4 border-solid border rounded-md w-1/5 m-2 bg-zinc-800">
            <h4 className="bg-zinc-900 text-yellow-500 p-2 mb-5 text-md font-bold">{name}</h4>
            <p>
                <span>Cost: </span>R${cost}
            </p>
            <p>{description}</p>
            <div className="mt-5 flex items-center gap-4">
                <button onClick={remove} className="w-1/2 border-none bg-zinc-50 hover:bg-zinc-300 text-zinc-900 text-base cursor-pointer border py-2 flex items-center justify-center transition-all">
                    <BsFillTrashFill className="w-1/6 mr-2"/> Remove
                </button>
            </div>
        </div>
    )
}

export default ServiceCard