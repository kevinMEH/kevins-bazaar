import PropTypes from "prop-types";

import menu from "../assets/menu.svg";
import searchIcon from "../assets/search.svg";

const Search = ({ filter, setFilter }) => {
    
    return (
        <div className="relative border-[1.75px] border-lightGray rounded-md mx-1">
            <img src={menu} className="absolute left-3.5 top-2.5 bottom-2.5" />
            <input type="text" value={filter} onChange={event => setFilter(event.target.value)} 
                className="bg-transparent py-2.5 px-14 w-full
                font-medium text-medGray rounded-[4.5px]
                focus:outline-none focus:ring-[1.75px] focus:ring-medGray"
            />
            <img src={searchIcon} className="absolute right-3.5 top-2.5 bottom-2.5" />
        </div>
    )
}

Search.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}

export default Search;