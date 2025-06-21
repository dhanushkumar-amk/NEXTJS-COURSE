import Link from 'next/link'
import React from 'react'

const dashboardlayout = ({ children } : {children : React.ReactNode}) => {
  return (
    <div>
        <div className='flex'>
            <aside className='w-64 p-4 border-r'>
                <nav>
                    <ul>
                        <li>
                            <Link href={'/dashboard'}>Dashboard Home</Link>
                            <Link href={'/dashboard/analytics'}>Dashboard Analytics</Link>
                        </li>
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

export default dashboardlayout
