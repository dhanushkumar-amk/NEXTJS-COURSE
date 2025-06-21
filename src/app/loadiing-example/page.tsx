async function getData(){
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
        stats : {
            users : "dhanushkumar",
        }
    }
}

const LoadingPageExample = async() => {
    const data = await getData();
    return (
    <div className="p-4">
        <h1>Loading example</h1>
        <p className="font-bold" > {data.stats.users}</p>
    </div>
  )
}

export default LoadingPageExample
