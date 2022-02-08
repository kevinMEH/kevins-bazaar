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
        <div className="pt-16 pb-24 flex flex-col items-center space-y-12">
            <h1 className="text-medGray font-bold text-3xl">Your Cart</h1>
            <div className="space-y-5">
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

    function navigateToProductPage() {
        navigate("../catalog/" + product.url, {state: {product}});
    }

    function handleRFC(event) {
        event.stopPropagation();
        removeFromCart(product.url);
    }

    return (
        <a onClick={navigateToProductPage} className="block md:hover:bg-hover -m-2.5 p-4 rounded-xl">
            <img className="rounded-lg h-52 w-full object-cover" src={product.thumbnail} />
            <div className="flex justify-between pt-3 px-1 pb-1">
                <div className="text-medGray">
                    <h2 className="font-semibold text-lg leading-snug">{product.name}</h2>
                    <p className="leading-relaxed">{product.price}</p>
                </div>
                
                <div onClick={handleRFC} className="flex">
                    <img src={trash} className="h-7 mt-1 pr-1" />
                </div>
            </div>
        </a>
    )
}

Item.propTypes = {
    product: PropTypes.object,
    removeFromCart: PropTypes.func
}

export default Cart;