import { Link } from "react-router-dom";

import landing from "../assets/landing.jpeg";

const Landing = () => {
    return (
        <div className="space-y-9">
            <img className="rounded-xl h-56 w-full object-cover" src={landing} />

            <div className="space-y-4">
                <h1 className="font-serif text-darkGray text-4xl font-bold text-center">
                    Making dream homes dreamier.
                </h1>
                <p className="text-medGray text-lg text-center">At Kevin's Bazaar, we provide our customers with premium, custom made furnishing for their homes.</p>
                <div className="flex justify-center pt-1">
                    <Link
                        to="catalog"
                        className="px-8 py-3.5 rounded-lg inline-block 
                        bg-green text-background font-medium">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;