import React from 'react'

const optionalCtachAllRoutes =  async({params} : {params : Promise<{slug  : string}>}) => {
    const { slug } = await params;
    console.log(slug);

  return (
     <div className='flex items-center justify-center h-screen'>
        <h1 className='font-bold'>This is a optional catch all routes Page</h1>
    </div>
  )
}

export default optionalCtachAllRoutes
