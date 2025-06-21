'use client'
import { useRouter } from 'next/navigation';


const NotFoundPage = () => {

    const router = useRouter();

    const handleRedirect = () => {
        router.push("/")
    }

    return (
    <div className='flex items-center justify-center h-screen'>
        <h1 className='font-bold m-4 '>This is a not found</h1>
        <button className='block m-5 bg-black text-white px-6 py-2 rounded-2xl' onClick={handleRedirect}> Return to home page</button>
    </div>
  )
}

export default NotFoundPage
