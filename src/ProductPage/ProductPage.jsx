import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import arrow from "../assets/arrowLeft.svg";
import shoppingBag from "../assets/shoppingBagWhite.svg";

const ProductPage = () => {
    const location = useLocation();
    const product = location.state.product;
    
    const [fullProduct, setFullProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // TODO: Pull data from API
        
        setFullProduct({desc: "Drawers and side tables made from premium walnut wood, available in an assortment of shapes and sizes. Whether it's for your front porch or your study, these drawers will stand the test of time.", ...product});
        setLoaded(true);
    }, [])

    return (
        <div className="space-y-4">
            <Link to={"../catalog"} className="flex text-lightGray font-medium text-lg">
                <div className="flex mx-auto space-x-1">
                    <img src={arrow} className="" />
                    <p>Catalog</p>
                </div>
            </Link>
            
            <img src={product.thumbnail} className="rounded-xl" />
            
            <h1 className="font-semibold text-darkGray text-2xl pt-3">{product.name}</h1>
            
            {loaded ? 
            <div className="space-y-0.5">
                <h2 className="text-darkGray text-lg font-medium">Description</h2>
                <p className="text-medGray leading-snug">{fullProduct.desc}</p>
            </div> : <></> }
            
            <div className="flex space-x-12 items-center py-2">
                <button className="px-5 py-3.5 bg-green text-background rounded-lg font-medium flex space-x-2 items-center">
                    <img src={shoppingBag} className="stroke-background inline h-5" />
                    <p>Add To Cart</p>
                </button>
                <p className="text-xl text-medGray">{product.price}</p>
            </div>
        </div>
    );
}

export default ProductPage;