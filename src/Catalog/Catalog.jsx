import { useState } from "react";
import PropTypes from "prop-types";

import Products from "./Products";
import Search from "./Search";

import Error from "../Error/Error";

const Catalog = ({ addToCart, inCart }) => {
    const [filter, setFilter] = useState("");
    const [error, setError] = useState(null);
    
    if(error) return <Error message="Something went wrong..." />
    else return (
        
        <div className="space-y-8 pt-12 pb-20 lg:pt-20 lg:pb-32 w-full flex-1 lg:max-w-7xl">
            <Search filter={filter} setFilter={setFilter} />
            <Products addToCart={addToCart} inCart={inCart} setError={setError} filter={filter} />
        </div>
        
    )
}

Catalog.propTypes = {
    addToCart: PropTypes.func,
    inCart: PropTypes.func,
}

export default Catalog;