import { useState } from "react";
import PropTypes from "prop-types";

import menu from "../assets/menu.svg";
import searchIcon from "../assets/search.svg";

const Search = ({ trueProducts, setFilteredProducts }) => {
     
    const [search, setSearch] = useState("");
    const [timeoutID, setTimeoutID] = useState(null);
    
    function handleSearch(event) {
        clearTimeout(timeoutID);
        setSearch(event.target.value); // setState is an async function... The more you know!
        setTimeoutID(setTimeout(() => filterProducts(event.target.value), 400));
    }
    
    function filterProducts(name) {
        // Add fuzzy searching?
        // TODO: Fetch!
        setFilteredProducts(trueProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()) ));
    }

    return (
        <div className="relative border-[1.75px] border-lightGray rounded-md mx-1">
            <img src={menu} className="absolute left-3.5 top-2.5 bottom-2.5" />
            <input type="text" value={search} onChange={handleSearch} 
                className="bg-transparent py-2.5 px-14 w-full
                font-medium text-medGray rounded-[4.5px]
                focus:outline-none focus:ring-[1.75px] focus:ring-medGray"
            />
            <img src={searchIcon} className="absolute right-3.5 top-2.5 bottom-2.5" />
        </div>
    )
}

Search.propTypes = {
    trueProducts: PropTypes.array,
    setFilteredProducts: PropTypes.func,
}

export default Search;