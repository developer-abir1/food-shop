import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { cartContext } from '../../CartContext';
import Product from '../Product/Product';

const Products = () => {

    const { name } = useContext(cartContext)

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://star-spark-pasta.glitch.me/api/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])


    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Product{name}</h1>
            <div className="grid grid-cols-5 my-8  gap-24 ">

                {
                    products.map(pd => <Product pd={pd} key={pd._id} ></Product>)
                }



            </div>
        </div>
    );
};

export default Products;