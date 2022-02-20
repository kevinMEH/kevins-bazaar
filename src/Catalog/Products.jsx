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
    
    // TODO: Infinite scroll
    
    return (
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-8">
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
    
    function handleATC(event) {
        event.stopPropagation();
        if(!productInCart) {
            setProductInCart(true);
            addToCart(product.url);
        }
    }
    
    return (
        <a onClick={() => navigate(product.url)} className="block md:col-span-1 lg:hover:bg-hover -m-4 md:my-0 p-4 rounded-xl">
            <img className="rounded-lg h-52 lg:h-60 w-full object-cover" src={product.thumbnail} />
            <div className="flex justify-between pt-3 md:pt-4 px-1 pb-1 gap-4">
                <div className="text-medGray md:space-y-1">
                    <h2 className="font-semibold text-lg md:text-xl leading-snug">{product.name}</h2>
                    <p className="leading-relaxed md:text-lg lg:text-xl">{product.price}</p>
                </div>
                
                <div onClick={handleATC} className="flex">
                    {productInCart ? 
                        <img src={checkCircle} className="h-7 md:h-8 lg:h-9 mt-1 pr-1 md:pr-0 cursor-pointer" />
                    :   <img src={shoppingBag} className="h-7 md:h-8 lg:h-9 mt-1 pr-1 md:pr-0 cursor-pointer" />
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