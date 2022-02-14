import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import shoppingBag from "../assets/shoppingBag.svg";
import checkCircle from "../assets/checkCircle.svg";
import { useLayoutEffect, useState } from "react";


const Products = ({ products, addToCart, inCart }) => {
    
    let cards = [];
    
    if(products) {
        for(let product of products) {
            cards.push(<Card product={product} addToCart={addToCart} inCart={inCart} key={product.url} />)
        }
    }
    
    return (
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-3">
            { cards }
        </div>
    )
}

Products.propTypes = {
    products: PropTypes.array,
    addToCart: PropTypes.func,
    inCart: PropTypes.func
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
        <a onClick={navigateToProductPage} className="block md:col-span-1 md:hover:bg-hover -m-2.5 md:my-0 p-4 md:py-2 rounded-xl">
            <img className="rounded-lg h-52 w-full object-cover" src={product.thumbnail} />
            <div className="flex justify-between pt-3 px-1 pb-1">
                <div className="text-medGray">
                    <h2 className="font-semibold text-lg md:text-xl leading-snug">{product.name}</h2>
                    <p className="leading-relaxed md:text-lg">{product.price}</p>
                </div>
                
                <div onClick={handleATC} className="flex">
                    {productInCart ? 
                        <img src={checkCircle} className="h-7 md:h-8 mt-1 pr-1 md:pr-0" />
                    :   <img src={shoppingBag} className="h-7 md:h-8 mt-1 pr-1 md:pr-0" />
                    }
                </div>
            </div>
        </a>
    )
}

Card.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func,
    inCart: PropTypes.func
}


export default Products;