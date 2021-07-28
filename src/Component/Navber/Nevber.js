import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../CartContext';

const Nevber = () => {

    const { cart, setCart } = useContext(cartContext)


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white  mx-auto sticky-top " >
                <div class="container">
                    <Link className="underlin-none " to="/"><img src="/images/logo.png" width="60" alt="" srcset="" /> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item ms-4 ">
                                <Link to="/" class="nav-link active" > Home</Link>
                            </li>
                            <li class="nav-item ms-4">
                                <Link to="/about" class="nav-link " >About</Link>
                            </li>
                            <li class="nav-item ms-4">
                                <Link to="/product" class="nav-link " >Product</Link>
                            </li>
                            <li class="nav-item ms-4">
                                <Link to="/dashboard" class="nav-link " >Dashboard</Link>
                            </li>
                            <li class="nav-item ms-4">
                                <Link to="/productCard" class="nav-link  " >
                                    <div class="flex bg-green-400 rounded-full py-1 px-6">
                                        <span className="font-bold ">{cart.totalItems}</span>
                                        <img src="/images/cart.png" alt="" srcset="" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nevber;