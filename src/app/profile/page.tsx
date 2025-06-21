'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const page = () => {

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    console.log(searchParams);
    console.log(router);
    console.log(pathName);

    const handleNavigate = () => {
        router.push("/")
    }
  return (
   <div className="h-screen">
     <div className='flex items-center justify-center'>
        <h1 className='font-bold'>This is a Profile Page</h1>
    </div>

    <div >
        <button onClick={handleNavigate} >Navigate to Home</button>
    </div>

   </div>
  )
}

export default page
