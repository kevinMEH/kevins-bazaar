import { Link } from "react-router-dom";
import shoppingCart from "../assets/shoppingCart.svg";

const Header = () => {
    return (
        <nav className="flex justify-between">
            <Link to="/">
                <h1 className="font-serif text-xl w-20 leading-none font-bold text-lightGray">Kevin's Bazaar</h1>
            </Link>
            <Link to="cart" className="flex items-center">
                <img src={shoppingCart} className="h-7" alt="Shopping Cart"/>
            </Link>
        </nav>
    )
}

export default Header;