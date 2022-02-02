import { useNavigate } from "react-router-dom";

import shoppingBag from "../assets/shoppingBag.svg";
import checkCircle from "../assets/checkCircle.svg";
import { useLayoutEffect, useState } from "react";

const Products = ({ products, addToCart, inCart }) => {
    
    let cards = [];
    
    for(let product of products) {
        cards.push(<Card product={product} addToCart={addToCart} inCart={inCart} key={product.url} />)
    }
    
    return (
        <div className="grid-cols-1 space-y-6">
            { cards }
        </div>
    )
}

const Card = ({ product, addToCart, inCart }) => {
    let [productInCart, setProductInCart] = useState(false);
    const navigate = useNavigate();
    
    useLayoutEffect(() => {
        setProductInCart(inCart(product.url));
    }, [])
    
    function navigateToProductPage() {
        navigate(product.url, {state: {product}})
    }
    
    function handleATC(event) {
        event.stopPropagation();
        if(!productInCart) {
            setProductInCart(true);
            addToCart(product.url);
        }
    }
    
    return (
        <a onClick={navigateToProductPage} className="block md:hover:bg-hover -m-2.5 p-4 rounded-xl">
            <img className="rounded-lg h-52 w-full object-cover" src={product.thumbnail} />
            <div className="flex justify-between pt-3 px-1 pb-1">
                <div className="text-medGray">
                    <h2 className="font-semibold text-lg leading-snug">{product.name}</h2>
                    <p className="leading-relaxed">{product.price}</p>
                </div>
                
                <div onClick={handleATC} className="flex">
                    {productInCart ? 
                        <img src={checkCircle} className="h-7 mt-1 pr-1" />
                    :   <img src={shoppingBag} className="h-7 mt-1 pr-1" />
                    }
                </div>
            </div>
        </a>
    )
}

export default Products;