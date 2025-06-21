import React from 'react'

const page = async({params} : {params : Promise<{slug  : string[]}>}) =>{

    const { slug } = await params;
    console.log(slug);


    return (
    <div className='flex items-center justify-center h-screen'>
        <h1 className='font-bold'>This is a product filter Page</h1>
    </div>
  )
}

export default page
