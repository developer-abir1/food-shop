import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../CartContext';

const Product = (props) => {

    const { pd } = props;
    const { cart, setCart } = useContext(cartContext)
    const [isAdding, setIsAdding] = useState(false);




    // Add Producat with ContextAPI
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
        <div className="">
            <Link to={`/products/${pd._id}`}>
                <img src={pd.image} className="sm:md-6" alt="pizza" />
                <div className="text-center">
                    <h1 className="font-bold my-3">{pd.name}</h1>
                    <span className="rounded-full bg-gray-200 py-1 px-4 text-sm ">{pd.size}</span>
                </div>
            </Link>
            <div className=" flex justify-between items-center mt-4">
                <span>${pd.price}</span>
                <button disabled={isAdding} onClick={(e) => { addTocarts(e, pd) }} className={`${isAdding ? 'bg-red-500' : 'bg-green-400'} px-4 py-1 rounded-full text-white font-bold hover:bg-green-500`}>ADD{isAdding ? 'ED' : ''} </button>
            </div>

        </div>
    );
};

export default Product;