import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { cartContext } from '../../CartContext';

const ProductDetails = () => {

    const [products, setProducts] = useState({})
    const { productId } = useParams();
    const history = useHistory()
    const { cart, setCart } = useContext(cartContext)
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetch(`https://star-spark-pasta.glitch.me/api/products/${productId}`)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
            })
    }, [productId])

    const addTocarts = (e, pd) => {

        let _cart = { ...cart }
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[pd._id]) {
            _cart.items[pd._id] += 1;
        }
        else {
            _cart.items[pd._id] = 1;

        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0
        }
        _cart.totalItems += 1;
        setCart(_cart)
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000)
    }


    return (
        <div className="container mx-auto mt-12">
            <button className="md-12 font-bold" onClick={() => { history.goBack() }}>Back</button>
            <div className="flex">
                <img src={products.image} alt="" srcset="" />

                <div className="ml-16">
                    <h1 className="text-xl font-bold">{products.name} </h1>
                    <div className="text-md">{products.size}</div>
                    <div className="font-bold mt-2"> ${products.price} </div>
                    <Link ><button onClick={(e) => { addTocarts(e, products) }} className={`${isAdding ? 'bg-red-500' : 'bg-green-400'} px-4 py-1 mt-4 rounded-full text-white font-bold hover:bg-green-500`}>{`${isAdding ? ' ADDED TO CART' : ' ADD TO CART'}`}</button></Link>

                </div>

            </div>


        </div>
    );
};

export default ProductDetails;