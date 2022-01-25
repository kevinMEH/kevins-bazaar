import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import ProductPage from "./ProductPage/ProductPage";
import Cart from "./Cart/Cart";
import Error from "./Error/Error";

import { validProduct } from "./Data";

const App = () => {
    const [ cart, setCart ] = useState(null);
    
    function addToCart(product) {
        if(validProduct(product)) setCart([...cart, product]);
    }
    
    function removeFromCart(product) {
        if(inCart(product)) {
            let newCart = [...cart];
            newCart.splice(newCart.findIndex(item => item.url === product.url), 1)
            setCart(newCart);
        }
    }
    
    useEffect(() => {
        console.log("usedEffect");
        let localCart = localStorage.getItem("cart");
        let parsedCart = JSON.parse(localCart); // cart: Array<Product>
        if(parsedCart) {
            parsedCart = parsedCart.filter(product => validProduct(product));
            setCart(parsedCart);
        } else setCart([]);
    }, []);

        
    function inCart(product) {
        // .includes() does not work, so matching URL
        for(let item of cart) {
            if(item.url === product.url) return true;
        }
        return false;
    }
    
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
                    <Route path="*" element={ <Error /> } />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;