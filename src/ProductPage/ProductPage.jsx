import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import arrow from "../assets/arrowLeft.svg";
import shoppingBag from "../assets/shoppingBagWhite.svg";
import check from "../assets/check.svg";

import Error from "../Error/Error";
import { getProduct } from "../Data";

const ProductPage = ({ addToCart, inCart, cart }) => {
    const params = useParams();
    let productURL = params.productURL;
    let navigate = useNavigate();
    let location = useLocation();
    
    const [product, setProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [productInCart, setProductInCart] = useState(false);
    
    useEffect(async () => {
        // TODO: Pull data from API
        let { error, product } = await getProduct(productURL);
        if(error) setError(error);
        setProduct(product);
        setLoaded(true);
    }, [])
    
    useLayoutEffect(() => {
        if(cart) setProductInCart(inCart(productURL));
    }, [cart])
    
    function handleATC(event) {
        event.stopPropagation();
        if(!productInCart) {
            setProductInCart(true);
            addToCart(productURL);
        }
    }
    
    if(!loaded) return <></>
    else {
        if(error) return <Error message="Something went wrong..." />
        else if(!product) return <Error message="Product not found!" />
        else return (
            
            <div className="space-y-4 md:space-y-6 pt-14 pb-32 max-w-7xl sm:m-8 md:m-0 ">
                <div className="flex text-lightGray font-medium text-lg lg:text-xl lg:inline items-center">
                    <a onClick={ () => location.key !== "default" ? navigate(-1) : navigate("/catalog") } className="inline-flex mx-auto space-x-1 cursor-pointer select-none lg:ml-4">
                        <img src={arrow} className="lg:h-7" />
                        <div>Back</div>
                    </a>
                </div>
                
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-8 lg:grid-cols-9 md:gap-12 lg:gap-16 md:items-center">
                    <div className="md:col-span-4">
                        <img src={product.thumbnail} className="rounded-xl aspect-3/2 md:aspect-4/3 w-full object-cover select-none" />
                    </div>
                    
                    <div className="space-y-4 md:col-span-4 lg:col-span-5">
                        <h1 className="font-semibold text-darkGray text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-3">{product.name}</h1>
                    
                        <div className="space-y-0.5 md:space-y-2">
                            <h2 className="text-darkGray text-lg md:text-xl lg:text-2xl font-medium">Description</h2>
                            <p className="text-medGray leading-snug md:text-lg lg:mr-12">{product.desc}</p>
                        </div>
                    
                        <div className="flex space-x-12 md:space-x-20 items-center py-2">
                            <button onClick={handleATC} className="px-5 py-3.5 bg-green text-background rounded-lg font-medium md:text-lg flex space-x-2 md:space-x-3 items-center">
                                {productInCart ? 
                                    <> <img src={check} className="inline h-5 md:h-6" />
                                    <p>Item In Cart</p> </>
                                :   <> <img src={shoppingBag} className="inline h-5 md:h-6" />
                                    <p>Add To Cart</p> </>
                                }
                            </button>
                            <p className="text-xl text-medGray">{product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

ProductPage.propTypes = {
    addToCart: PropTypes.func,
    inCart: PropTypes.func,
    cart: PropTypes.array
}

export default ProductPage;