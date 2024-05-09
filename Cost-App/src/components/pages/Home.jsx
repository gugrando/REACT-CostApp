// import carteira from '../../img/carteira.png'
import LinkButton from '../layouts/LinkButton'
function Home (){
    return (
        <section className='w-full flex flex-col items-center justify-center p-16'>
            <h1 className='text-4xl mb-2'>Welcome to <span className='text-yellow-500 bg-zinc-900'>Cost APP</span></h1>
            <p className='mb-6 text-zinc-400'>Start managing your projects with ease!</p>
            <LinkButton to='/newproject' text='Create Project' />
            {/* <img className='size-28 mt-6' src={carteira} alt="cost" /> */}
        </section>
    )
}
export default Home 