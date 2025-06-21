
import { Metadata } from 'next';
import React from 'react'

export async function generateMetaData({params} : {params : Promise <{slug : string }>})  :Promise<Metadata>{
    const {slug} = await  params;
    const data = dummydata[slug as keyof typeof dummydata]

    return {
        title : data.title,
        description : "Some random data"
    }
}

const dummydata = {
    "1" : { title : "one"},
    "2" : { title : "two"},
    "3" : { title : "three"},
}

const DynmaicMetaDataExample = async ({params} : {params : Promise <{slug : string }>}) => {
    const {slug} = await  params;
    const data = dummydata[slug as keyof typeof dummydata]
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default DynmaicMetaDataExample
