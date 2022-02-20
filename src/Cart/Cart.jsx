import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import trash from "../assets/trash.svg";
import arrowRight from "../assets/arrowRight.svg";

import { getProduct } from "../Data";

const Cart = ({ cart, removeFromCart }) => {
    const [items, setItems] = useState([]);
    
    useEffect(async () => {
        if(cart) {
            let tempItems = [];
            let promises = [];
            for(let url of cart) {
                promises.push(getProduct(url));
            }
            await Promise.all(promises).then(products => products.forEach(({ error, product, url }) => {
                if(error) console.log("Error: " + error + " on product " + url);
                else {
                    if(!product) {
                        console.log("Product does not exist: " + url);
                        removeFromCart(url);
                    } else tempItems.push(<Item product={product} removeFromCart={removeFromCart} key={product.url} />);
                }
            }))
            setItems(tempItems);
        }
    }, [cart])

    return (
        <div className="pt-16 lg:pt-20 pb-24 lg:pb-28 flex-1 w-full justify-between flex flex-col gap-12 lg:gap-14 items-center max-w-4xl">
            <h1 className="text-medGray font-bold text-3xl lg:text-4xl">Your Cart</h1>
            <div className="space-y-5 md:space-y-8 lg:space-y-9 flex-1">
                {items}
            </div>
            <button className="px-5 py-3.5 bg-green text-background rounded-lg font-medium flex space-x-2 items-center"><p>Check Out</p><img src={arrowRight} className="inline h-5" /></button>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    removeFromCart: PropTypes.func
}

const Item = ({ product, removeFromCart }) => {
    const navigate = useNavigate();

    function handleRFC(event) {
        event.stopPropagation();
        removeFromCart(product.url);
    }
    
    return (
        <a onClick={() => navigate("/catalog/" + product.url)}
            className="grid grid-cols-9 sm:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
            <img src={product.thumbnail} className="col-span-3 sm:col-span-1 rounded-md md:rounded-lg w-full h-auto object-cover aspect-4/3 cursor-pointer" />
            <div className="col-span-6 sm:col-span-3 flex justify-between gap-2">
                <div className="text-medGray mt-1 md:mt-2">
                    <h2 className="font-semibold leading-tight sm:text-lg md:text-xl lg:text-2xl">{product.name}</h2>
                    <p className="leading-relaxed text-sm sm:text-base lg:text-lg">{product.price}</p>
                </div>
                <div onClick={handleRFC} className="col-span-1 flex items-center">
                    <img src={trash} className="h-7 md:h-8 lg:h-9 cursor-pointer" />
                </div>
            </div>
        </a>
    );
}

Item.propTypes = {
    product: PropTypes.object,
    removeFromCart: PropTypes.func
}

export default Cart;