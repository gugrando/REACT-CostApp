/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
function LinkButton({to, text}){
    return (
        <Link className='bg-zinc-900 text-white py-2 px-4 hover:text-yellow-500 transition' to={to}>
            {text}
        </Link>
    )
}
export default LinkButton