function Submit({ text }){
    return (
        <div className="flex flex-col mb-4">
            <button className="bg-zinc-900 py-2 px-4 text-white transition cursor-pointer border-none hover:text-yellow-500">
                {text}  
            </button>
        </div>
    )
}
export default Submit