import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="md:flex md:flex-row-reverse md:gap-8">
            <div className="w-full h-auto">
                <div className="rounded-xl aspect-3/2 md:aspect-square landingImage" />
            </div>

            <div className="mt-9 md:mt-0 space-y-4 text-center md:text-left md:flex-grow">
                <h1 className="font-serif text-darkGray text-4xl md:text-[2.75rem] font-bold">
                    Making dream homes dreamier.
                </h1>
                <p className="text-medGray text-lg">At Kevin's Bazaar, we provide our customers with premium, custom made furnishing for their homes.</p>
                <div className="flex justify-center md:justify-start pt-1">
                    <Link
                        to="catalog"
                        className="px-8 py-3.5 rounded-lg md:text-lg inline-block 
                        bg-green text-background font-medium">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;