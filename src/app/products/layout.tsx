import React from 'react'

const ProductsLayouts = ( { children } : { children : React.ReactNode } ) => {
  return (
    <div>
        <h1 className='font-bold m-3'>Products</h1>
        <div className='flex'>
            <aside className='w-64 p-4 border-r'>
                <nav>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                        <li>four</li>
                    </ul>
                </nav>
            </aside>
            <div className='flex-1 p-5'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default ProductsLayouts
