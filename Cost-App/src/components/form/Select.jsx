/* eslint-disable react/prop-types */

function Select({text, name, options, handleOnChange, value}) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold" htmlFor={name}>{text}:</label>
            <select required onChange={handleOnChange} className="p-3 rounded-none border-none placeholder:text-zinc-400" name={name} id={name} value={value || ''}>
                <option>Select an option</option>
                {options.map((option) => {
                    return <option value={option.id} key={option.id}>{option.name}</option>
                })}
            </select>
        </div>
    )
}
export default Select