import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Products from "./Products";
import Search from "./Search";

import { getPage } from "../Data";
import Error from "../Error/Error";

const Catalog = ({ addToCart, inCart }) => {
    const [products, setProducts] = useState(null); // All products
    const [filter, setFilter] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(async () => {
        // Add infinite scroll TODO: Append new products to products
        let { error, products } = await getPage(1, filter);
        if(error) setError(error);
        setLoaded(true);
        setProducts(products);
    }, [filter]);
    
    if(!loaded) return <></>
    else {
        if(error) return <Error message="Something went wrong..." />
        else return (
            
            <div className="space-y-8 pt-12 pb-20 lg:pt-20 lg:pb-32 w-full flex-1 lg:max-w-7xl">
                <Search filter={filter} setFilter={setFilter} />
                <Products products={products} addToCart={addToCart} inCart={inCart} />
            </div>
            
        )
    }
}

Catalog.propTypes = {
    addToCart: PropTypes.func,
    inCart: PropTypes.func,
}

export default Catalog;