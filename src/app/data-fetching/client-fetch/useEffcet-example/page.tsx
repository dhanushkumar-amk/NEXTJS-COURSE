'use client'

import React, { useState, useEffect } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

const useEffectExample = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchListOfProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://dummyjson.com/products");
                const result = await res.json();
                setData(result.products);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchListOfProducts();
    }, []);
    return (
        <div>
            <h1>useEffect Example</h1>
            <div className="flex flex-col gap-5 m-6">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((item) => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
export default useEffectExample;
