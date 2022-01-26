import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import trash from "../assets/trash.svg";
import arrowRight from "../assets/arrowRight.svg";

const Cart = ({ cart, removeFromCart }) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        if(cart) {
            let tempItems = [];
            for(let item of cart) {
                tempItems.push(<Item product={item} removeFromCart={removeFromCart} key={item.url} />);
            }
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

const Item = ({ product, removeFromCart }) => {
    const navigate = useNavigate();

    function navigateToProductPage() {
        navigate("../catalog/" + product.url, {state: {product}});
    }

    function handleRFC(event) {
        event.stopPropagation();
        removeFromCart(product);
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

export default Cart;