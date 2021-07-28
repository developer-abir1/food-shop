import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Nevber from './Component/Navber/Nevber';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Product from './Component/Product/Product';
import Products from './Component/Products/Products';
import ProductCard from './Component/ProductCard/ProductCard';
import { cartContext } from './CartContext';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [cart, setCart] = useState({});



  //cart from  Local storage 
  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Nevber />
        <Switch>


          <Route path="/" component={Home} exact ></Route>
          <Route path="/home" component={Home} exact ></Route>
          <Route path="/about" component={About} ></Route>
          <Route path="/product" component={Products} ></Route>
          <Route path="/productCard" component={ProductCard} ></Route>
          <Route path="/products/:productId" component={ProductDetails} ></Route>
        </Switch>
      </Router >
    </cartContext.Provider>
  );
}

export default App;
