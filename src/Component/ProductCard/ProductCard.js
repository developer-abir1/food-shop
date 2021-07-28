import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../CartContext';






const ProductCard = () => {
    let total = 0;
    const [products, setProducts] = useState([])
    const { cart, setCart } = useContext(cartContext)
    // const [products, setProducts] = useState([])


    const [priceFetch, toggolePriceFetch] = useState(false)



    useEffect(() => {



        // Cart Itemes
        if (!cart.items) {
            return;

        }

        if (priceFetch) {
            return;
        }


        fetch('https://star-spark-pasta.glitch.me/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) })

        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                toggolePriceFetch(true)
            })
    }, [cart, priceFetch])








    const handleDelete = (productId) => {
        const deleteCart = { ...cart };
        const qty = deleteCart.items[productId];
        delete deleteCart.items[productId]
        deleteCart.totalItems -= qty;
        setCart(deleteCart);
        setProducts(products.filter(pd => pd._id !== productId))

    }





    const getQty = (productId) => {
        return cart.items[productId]
    }


    const increment = (productId) => {
        const oldQuantity = cart.items[productId]
        const newQuantity = { ...cart }
        newQuantity.items[productId] = oldQuantity + 1;
        newQuantity.totalItems += 1
        setCart(newQuantity)
    }

    const decrement = (productId) => {
        const oldQuantity = cart.items[productId]

        if (oldQuantity === 1) {
            return;
        }
        const newQuantity = { ...cart }
        newQuantity.items[productId] = oldQuantity - 1;

        newQuantity.totalItems -= 1;

        setCart(newQuantity)

    }


    const getSum = (productId, price) => {
        const sum = price * getQty(productId);
        total += sum
        return sum;


    }

    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12  font-bold">Cart Items</h1>
            <ul>



                {products.map(pd => <li className="mb-12" key={pd._id}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center" >
                            <img className="h-16" src={pd.image} alt="" srcset="" />
                            <span className="font-bold ml-4 w-48">{pd.name}</span>
                        </div>
                        <div className="">
                            <button onClick={() => { decrement(pd._id) }} className="bg-green-500  px-4 py-2 rounded-full landing-none">-</button>

                            <b className="px-4"> {getQty(pd._id)}</b>

                            <button onClick={() => { increment(pd._id) }} className="bg-green-500  px-4 py-2 rounded-full landing-none">+</button>
                        </div>
                        <span>{getSum(pd._id, pd.price)}</span>
                        <button onClick={() => { handleDelete(pd._id) }} className="bg-red-500 px-4 py-2 rounded-full landing-none text-white">Delete</button>
                    </div>
                </li>
                )}





            </ul>
            <hr className="my-6 " />
            <div className="text-right">
                <b>Grand Total:</b> {total}
            </div>
            <div className="text-right mt-6">
                <button className=" bg-green-400 px-4 py-2 rounded-full landing-none">Process Check Out</button>
            </div>
        </div>
    );
};

export default ProductCard;