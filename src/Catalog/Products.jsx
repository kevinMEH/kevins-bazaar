import { Link } from "react-router-dom";

import shoppingBag from "../assets/shoppingBag.svg";

const Products = ({ products }) => {
    
    let cards = [];
    
    for(let product of products) {
        cards.push(<Card title={product.name} thumbnail={product.thumbnail} price={product.price} url={product.url} key={product.url} />)
    }
    
    return (
        <div className="grid-cols-1 space-y-6">
            { cards }
        </div>
    )
}

const Card = ({ title, thumbnail, price, url }) => {
    return (
        <Link className="block hover:bg-hover -m-2.5 p-4 rounded-xl" to={url}>
            <img className="rounded-lg h-52 w-full object-cover" src={thumbnail} />
            <div className="flex justify-between pt-3 px-1 pb-1">
                <div className="text-medGray">
                    <h2 className="font-semibold text-lg leading-snug">{title}</h2>
                    <p className="leading-relaxed">{price}</p>
                </div>
                {/* TODO: Add to cart */}
                <div className="flex">
                    <img src={shoppingBag} className="h-7 mt-1" />
                </div>
            </div>
        </Link>
    )
}

export default Products;