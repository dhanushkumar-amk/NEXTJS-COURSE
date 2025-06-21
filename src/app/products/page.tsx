import Link from 'next/link'
import React from 'react'

const Products = () => {

    const productData = [
        { id : 1, name : "Mobile1", price : 5000},
        { id : 2, name : "Mobile2", price : 25000},
        { id : 3, name : "Mobile3", price : 35000},
        { id : 4, name : "Mobile4", price : 900},
    ]

  return (
     <div className='flex items-center justify-center h-screen'>
        <h1 className='font-bold'></h1>
        <div className='grid gap-3'>
            {
                productData.map((item, index) => (
                    <div className='border p-2 rounded' key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <Link href={`/products/${item.id}`}>
                            View Details
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products
