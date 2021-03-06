import PropTypes from "prop-types";
import { useState } from "react";

import menu from "../assets/menu.svg";
import searchIcon from "../assets/search.svg";

const Search = ({ filter, setFilter }) => {
    
    const [searchTerm, setSearchTerm] = useState(filter);
    const [searchTimeout, setSearchTimeout] = useState(null);
    
    function handleChange(event) {
        if(searchTimeout) clearTimeout(searchTimeout);
        setSearchTerm(event.target.value);
        setSearchTimeout(setTimeout(() => setFilter(event.target.value), 250));
    }
    
    return (
        <div className="relative border-[1.75px] border-lightGray rounded-md lg:rounded-lg mx-auto">
            <img src={menu} className="absolute left-3.5 top-1/2 -translate-y-1/2 lg:h-7 lg:left-5" />
            <input type="text" value={searchTerm} onChange={handleChange} 
                className="bg-transparent py-2.5 lg:py-3.5 px-14 lg:px-16 w-full
                font-medium text-medGray rounded-[4.5px] lg:text-lg
                focus:outline-none focus:ring-[1.75px] focus:ring-medGray"
            />
            <img src={searchIcon} className="absolute right-3.5 top-1/2 -translate-y-1/2 lg:h-7 lg:right-5" />
        </div>
    )
}

Search.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}

export default Search;