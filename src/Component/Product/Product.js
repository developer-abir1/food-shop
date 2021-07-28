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

        <>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full container">
                <Link to={`/products/${pd._id}`}>
                    <img alt="ecommerce" class="object-cover object-center w-full  block" src={pd.image} />

                    <div class="mt-4 text-center">

                        <h2 class="text-gray-900 title-font text-lg font-medium">{pd.name}</h2>
                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{pd.size}</h3>

                    </div>
                </Link>
                <div className=" flex justify-between items-center mt-4">
                    <span className="font-bold">${pd.price}</span>
                    <button disabled={isAdding} onClick={(e) => { addTocarts(e, pd) }} className={`${isAdding ? 'bg-red-500' : 'bg-green-400'} px-4 py-1 rounded-full text-white font-bold hover:bg-green-500`}>ADD{isAdding ? 'ED' : ''} </button>
                </div>
            </div>




        </>
    );
};

export default Product;