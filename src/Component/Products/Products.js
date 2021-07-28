import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {


    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://star-spark-pasta.glitch.me/api/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])



    // const showAllProduct = () => {

    //     const maxProduct = 0;
    //     for (let i = 0; i < products.length; i++) {
    //         let maxResult = 4;
    //         const element = products[i];

    //     }
    // }


    return (

        <div class="container px-5 py-24 mx-auto">
            <h1 className="text-lg font-bold my-8">Product</h1>

            <div class="flex flex-wrap -m-4">

                {
                    products.map(pd => <Product pd={pd} key={pd._id} ></Product>)
                }



            </div>

            <button className="bg-green-500 px-4 py-2 rounded-full landing-none font-bold text-white">Show All Products</button>
        </div>

    );
};

export default Products;