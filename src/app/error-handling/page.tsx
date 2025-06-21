

async function getProducts(){
    const shouldError = Math.random() > 0.1

    if(shouldError){
        throw new Error("Failed to fetch the products");

    }

    return [
        {id : 1, name : "product 1"},
        {id : 2, name : "product 2"},
        {id : 3, name : "product 3"},
    ]
}

const errorHandlingExample = async() => {

    const products = await getProducts();

  return (
    <div>
        <h1>Product list</h1>
        <div className='flex gap-4' >
            {
                products.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))
            }
        </div>
    </div>
  )
}

export default errorHandlingExample
