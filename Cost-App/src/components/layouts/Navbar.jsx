import { Link } from 'react-router-dom'
import Container from './Container'
import moeda from '../../img/moeda.png'
function Navbar(){
    return (
        <nav className='flex justify-between bg-zinc-900 p-4'>
            <Container>
                <Link to='/'>
                    <img className='w-16 ml-6' src={moeda} />
                </Link>
                <ul className='flex list-none items-center gap-4 mr-6'>
                    <li>
                        <Link to='/' className='text-white hover:text-yellow-500'>Home</Link>
                    </li>
                    <li>
                        <Link to='/projects' className='text-white hover:text-yellow-500'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/company' className='text-white hover:text-yellow-500'>Company</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='text-white hover:text-yellow-500'>Contact</Link>
                    </li>
                </ul>  
            </Container>
        </nav>
    )
}
export default Navbar