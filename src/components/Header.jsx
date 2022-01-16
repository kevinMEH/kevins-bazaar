import shoppingCart from "../assets/shopping-cart.svg";

const Header = () => {
    return (
        <nav className="flex justify-between">
            <a>
                <h1 className="font-serif text-xl w-20 leading-none font-bold text-lightGray">Kevin's Bazaar</h1>
            </a>
            <a className="flex items-center">
                <img src={shoppingCart} className="fill-lightGray h-7" alt="Shopping Cart"/>
            </a>
        </nav>
    )
}

export default Header;