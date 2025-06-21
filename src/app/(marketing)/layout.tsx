
import Link from 'next/link'


const marketLayoutPage = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <header>
            <nav className='flex gap-5'>
                <Link href={"/"} >Home</Link>
                <Link href={"/about"}>About </Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default marketLayoutPage
