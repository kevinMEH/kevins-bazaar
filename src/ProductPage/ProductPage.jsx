import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import arrow from "../assets/arrowLeft.svg";
import shoppingBag from "../assets/shoppingBagWhite.svg";
import check from "../assets/check.svg";

import { getFullProduct } from "../Data";

const ProductPage = ({ addToCart, inCart, cart }) => {
    const location = useLocation();
    const product = location.state.product;
    
    const [fullProduct, setFullProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [productInCart, setProductInCart] = useState(false);
    
    useEffect(() => {
        // TODO: Pull data from API
        let { error, fullProduct } = getFullProduct();
        if(error) setError(error);
        setFullProduct(fullProduct);
        setLoaded(true);
    }, [])
    
    useLayoutEffect(() => {
        if(cart) setProductInCart(inCart(product));
    }, [cart])
    
    function handleATC(event) {
        event.stopPropagation();
        if(!productInCart) {
            setProductInCart(true);
            addToCart(product);
        }
    }

    return (
        <div className="space-y-4 pt-20 pb-32">
            <Link to={"../catalog"} className="flex text-lightGray font-medium text-lg">
                <div className="flex mx-auto space-x-1">
                    <img src={arrow} className="" />
                    <p>Catalog</p>
                </div>
            </Link>
            
            <img src={product.thumbnail} className="rounded-xl h-56 w-full object-cover" />
            
            <h1 className="font-semibold text-darkGray text-2xl pt-3">{product.name}</h1>
            
            {loaded ? 
                <div className="space-y-0.5">
                    <h2 className="text-darkGray text-lg font-medium">Description</h2>
                    <p className="text-medGray leading-snug">{fullProduct.desc}</p>
                </div>
            :   <></> }
            
            <div className="flex space-x-12 items-center py-2">
                <button onClick={handleATC} className="px-5 py-3.5 bg-green text-background rounded-lg font-medium flex space-x-2 items-center">
                    {productInCart ? 
                        <> <img src={check} className="inline h-5" />
                        <p>Item In Cart</p> </>
                    :   <> <img src={shoppingBag} className="inline h-5" />
                        <p>Add To Cart</p> </>
                    }
                </button>
                <p className="text-xl text-medGray">{product.price}</p>
            </div>
        </div>
    );
}

export default ProductPage;