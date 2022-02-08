import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import ProductPage from "./ProductPage/ProductPage";
import Cart from "./Cart/Cart";
import Error from "./Error/Error";

const App = () => {
    const [ cart, setCart ] = useState(null);
    
    function addToCart(productURL) {
        setCart([...cart, productURL]);
    }
    
    function removeFromCart(productURL) {
        if(inCart(productURL)) {
            let newCart = [...cart];
            newCart.splice(newCart.indexOf(productURL), 1)
            setCart(newCart);
        }
    }
    
    function inCart(productURL) {
        return cart.indexOf(productURL) != -1;
    }
    
    useEffect(() => {
        let localCart = localStorage.getItem("cart");
        let parsedCart = JSON.parse(localCart); // cart: Array<Product>
        if(parsedCart) setCart(parsedCart);
        else setCart([]);
    }, []);
    
    useEffect(() => {
        if(cart) localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <div className="p-6 min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="catalog" element={ <Catalog addToCart={addToCart} inCart={inCart} /> } />
                    <Route path="catalog/:productURL" element={<ProductPage addToCart={addToCart} inCart={inCart} cart={cart} />} />
                    <Route path="cart" element={ <Cart cart={cart} removeFromCart={removeFromCart} /> } />
                    <Route path="*" element={ <Error message="Page not found!" /> } />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;