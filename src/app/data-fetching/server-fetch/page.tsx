interface product {
    id : number,
    title : string,
    price : number,
    category : string
}

interface productsResponse {
    products : product[];
    total : number
}

async function getProducts() : Promise<productsResponse> {
    const response = await fetch("https://dummyjson.com/products", {
        cache : 'no-store'
    });

    if(!response.ok)
        throw new Error("Fail to fetch products");
    return response.json();

}

const serverSideDataFetching = async() => {
    const products = await getProducts();
    return (
    <div>
        <h1> Server side Data fetching</h1>
        <h3>{products.total} number of products</h3>
        <div className="flex flex-col gap-5 m-6" >
              {
            products.products.map(item => (
                <div key={item.id} >
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default serverSideDataFetching
