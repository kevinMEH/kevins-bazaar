import { useState, useEffect } from "react";

import Products from "./Products";
import Search from "./Search";

import { getProducts } from "../Data";

const Catalog = () => {
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
        
        let {error, productsWrapper} = getProducts(1);
        if(error) setError(error);
        setLoaded(true);
        setTrueProducts(productsWrapper.products);
        setFilteredProducts(productsWrapper.products);
        
    }, []);
    
    if(loaded && !error) {
        return (
            <div className="space-y-8 pt-12 pb-20">
                <Search trueProducts={trueProducts} setFilteredProducts={setFilteredProducts} />
                <Products filteredProducts={filteredProducts} />
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