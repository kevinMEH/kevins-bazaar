import { Link } from "react-router-dom";
import shoppingCart from "../assets/shoppingCart.svg";

const Header = () => {
    return (
        <nav className="flex justify-between select-none max-w-7xl w-full">
            <Link to="/">
                <h1 className="font-serif text-xl lg:text-2xl w-20 leading-none lg:leading-6 font-bold text-lightGray">Kevin's Bazaar</h1>
            </Link>
            <Link to="cart" className="flex items-center">
                <img src={shoppingCart} className="h-7 lg:h-8" alt="Shopping Cart"/>
            </Link>
        </nav>
    )
}

export default Header;