/* eslint-disable react/prop-types */
function Input ({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold" htmlFor={name}>{text}</label>
            <input required className="p-3 rounded-none border-none placeholder:text-zinc-400" type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    )
}
export default Input