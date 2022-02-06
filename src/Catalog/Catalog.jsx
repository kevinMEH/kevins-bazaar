import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
        let { error, products } = getPage(1);
        if(error) setError(error);
        setLoaded(true);
        setTrueProducts(products);
        setFilteredProducts(products);
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

Catalog.propTypes = {
    addToCart: PropTypes.func,
    inCart: PropTypes.func,
}

export default Catalog;