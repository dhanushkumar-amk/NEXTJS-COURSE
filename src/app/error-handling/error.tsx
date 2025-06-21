'use client'

import React, { useEffect } from 'react'

const error = (error, reset) => {

    useEffect(() => {},[error])

  return (
    <div>
        <p className='text-red-600' >{error.message || "An error occuired" }</p>
    </div>
  )
}

export default error
