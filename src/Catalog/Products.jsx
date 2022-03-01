import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import shoppingBag from "../assets/shoppingBag.svg";
import checkCircle from "../assets/checkCircle.svg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { getPage } from "../Data";

const Products = ({ addToCart, inCart, setError, filter }) => {
    
    const initRef = useRef(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    async function fetchProducts(reset = false) {
        if(reset) { // Reset executes on filter change. Resets page number, hasMore and products.
            setPage(2);
            setHasMore(true);
            let { error, products: fetchedProducts } = await getPage(1, filter);
            if(error) {
                setError(error);
                return;
            }
            if(fetchedProducts.length < 6) setHasMore(false);
            setProducts([...fetchedProducts]);
        } else {
            let { error, products: fetchedProducts } = await getPage(page, filter);
            if(error) {
                setError(error);
                return;
            }
            setPage(page + 1);
            if(fetchedProducts.length < 6) setHasMore(false);
            setProducts([...products, ...fetchedProducts]);
        }
    }
    
    useEffect(async () => {
        await fetchProducts();
    }, [])
    
    useEffect(async () => { // Resets on filter change
        // We must not execute this on init mount because it will compete with the useEffect above
        if(initRef.current) await fetchProducts(true);
        else initRef.current = true;
    }, [filter]);
    
    let cards = [];
    
    if(products) {
        for(let product of products) {
            cards.push(<Card product={product} addToCart={addToCart} inCart={inCart} key={product.url} />)
        }
    }
    
    return (
        <InfiniteScroll
            dataLength = { cards.length }
            next={ fetchProducts }
            hasMore={ hasMore }
            className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-8"
            style={ {overflow: "visible" } }
        >
            { cards }
        </InfiniteScroll>
    )
}

Products.propTypes = {
    addToCart: PropTypes.func,
    inCart: PropTypes.func,
    setError: PropTypes.func,
    filter: PropTypes.string
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