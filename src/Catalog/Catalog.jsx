import { useState, useEffect } from "react";

import Products from "./Products";
import Search from "./Search";

import { getPage } from "../Data";

const Catalog = ({ addToCart, inCart }) => {
    // TODO: Implement fetch and we don't need trueProducts and filteredProducts anymore
    const [trueProducts, setTrueProducts] = useState(null); // All products
    const [filteredProducts, setFilteredProducts] = useState(null); // Filtered products
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Mock pull data from API

        // fetch("https://bazaar.liao.gg/api/products")
        //     .then(response => response.json())
        //     .then(result => {
        //         setLoaded(true);
        //         setTrueProducts(result);
        //         setProducts(result);
        //     }, error => {
        //         setLoaded(true);
        //         setError(error);
        //     })
        
        let {error, productsWrapper} = getPage(1);
        if(error) setError(error);
        setLoaded(true);
        setTrueProducts(productsWrapper.products);
        setFilteredProducts(productsWrapper.products);
    }, []);
    
    if(loaded && !error) {
        return (
            <div className="space-y-8 pt-12 pb-20">
                <Search trueProducts={trueProducts} setFilteredProducts={setFilteredProducts} />
                <Products products={filteredProducts} addToCart={addToCart} inCart={inCart} />
            </div>
        )
    } else if(error) {
        return (
            // Perhaps try again?
            <>
                <div>Something went wrong...</div>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Catalog;