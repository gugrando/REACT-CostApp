import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer(){
    return (
        <footer className="flex-col bg-zinc-900 text-white p-12 text-center">
            <ul className="flex justify-center list-none gap-4">
                <li className="hover:text-yellow-500 text-2xl cursor-pointer"><FaFacebook /></li>
                <li className="hover:text-yellow-500 text-2xl cursor-pointer"><FaInstagram /></li>
                <li className="hover:text-yellow-500 text-2xl cursor-pointer"><FaLinkedin /></li>
            </ul>
            <p className="mt-4 text-sm"><span className="font-bold text-yellow-500">Costs APP </span>&copy; 2024</p>
        </footer>
    )
}
export default Footer