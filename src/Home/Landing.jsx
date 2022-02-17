import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="md:flex md:flex-row-reverse md:gap-8 md:items-center">
            <div className="w-full h-auto md:max-w-sm">
                <div className="rounded-xl aspect-3/2 md:aspect-square landingImage" />
            </div>

            <div className="mt-9 md:mt-0 space-y-4 text-center md:text-left">
                <h1 className="inline-block whitespace-nowrap font-serif text-darkGray text-4xl md:text-[2.75rem] lg:text-6xl font-bold">
                    Making dream <br /> homes dreamier.
                </h1>
                <p className="text-medGray text-lg lg:text-xl lg:mr-8">At Kevin's Bazaar, we provide our customers with premium, custom made furnishing for their homes.</p>
                <div className="flex justify-center md:justify-start pt-1">
                    <Link
                        to="catalog"
                        className="px-8 py-3.5 lg:px-9 lg:py-4 rounded-lg md:text-lg lg:text-xl inline-block 
                        bg-green text-background font-medium">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;