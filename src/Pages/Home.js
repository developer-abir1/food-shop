import React from 'react';
import Products from '../Component/Products/Products';

const Home = () => {
    document.title = "Pizza Lover"
    return (
        <>
            <div className="hero py-16">
                <div className="container max-auto flex items-center justify-between" >
                    <div className="w-1/2 ">
                        <h6 className="text-lg">Are You Hungry ?</h6>
                        <h5 className="text-3xl md:text-6xl font-bold ">Do  Wan't It</h5>
                        <button className="px-6 mt-4 py-2 rounded-full text-white font-bold bg-green-400 hover:bg-green-500">Order Now</button>
                    </div>
                    <div className="w-1/2">
                        <img className="w-4/5" src="/images/pizza.png" alt="" srcset="" />
                    </div>
                </div>
            </div>



            <div className="eeee">
                <Products />
            </div>

        </>
    );
};

export default Home;