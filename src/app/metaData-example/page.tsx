import { Metadata } from 'next'
import Link from 'next/link'

export const metaData : Metadata = {
    title : "MetaData example",
    description : "This is my example writing static meta Data"
}

const MetaDataExample = () => {

    const data = [
        {id : 1, name : "one"},
        {id : 2, name : "two"},
        {id : 3, name : "three"},
        {id : 4, name : "four"},
    ]

    return (
    <div>
        <h1>Meta data examples</h1>
        <ul>
            {
                data.map((item) => (
                    <li key={item.id}>
                        <Link href={`/metaData-example/${item.id}`}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default MetaDataExample
