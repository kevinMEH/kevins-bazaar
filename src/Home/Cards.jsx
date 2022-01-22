import { Link } from "react-router-dom";

import { isMobile, BrowserView } from "react-device-detect";

import couchAndPillows from "../assets/couchAndPillows.jpeg";
import girlJumpCouch from "../assets/girlJumpCouch.jpeg";
import chairsAndTable from "../assets/chairsAndTable.jpeg";
import arrow from "../assets/chevronRight.svg";

// TODO: href ROUTE TO CATALOG
let catalogURL;

const Products = () => {
    // TODO: INCLUDE UNSPLASH IN README
    return (
        <div>
            <h2 className="text-darkGray font-bold text-3xl text-center px-4 pb-5">Check out our newest releases.</h2>
            <div className="space-y-7">
                <Card image={couchAndPillows} alt={"Gray couch and brown pillows"} />
                <Card image={girlJumpCouch} alt={"Girl jumping on gray couch"} />
                <Card image={chairsAndTable} alt="Navy chairs and wood table on yellow and brown background" end={isMobile} />
                <BrowserView>
                    {/* TODO: Populate */}
                    <Card image={couchAndPillows} alt={"Couch and Pillows"} />
                    <Card image={couchAndPillows} alt={"Couch and Pillows"} />
                    <Card image={couchAndPillows} alt={"Couch and Pillows"} end={true} />
                </BrowserView>
            </div>
        </div>
    )
}

const Card = ({ image, alt, url, end = false }) => {
    if(end) {
        return (
            // TODO: <Link /> TO CATALOG
            <Link to={"catalog"} className="block relative rounded-xl overflow-hidden">
                <img className="object-cover h-52 w-full" src={image} alt={alt} />
                <div className="absolute bg-overlay top-0 left-0 right-0 bottom-0" />
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-center">
                    <h3 className="text-3xl text-background font-semibold">View More<img src={arrow} className="inline h-10 -translate-y-0.5" /></h3>
                </div>
            </Link>
        )
    } else {
        return (
            // TODO: <Link />
            <a href={url} className="block rounded-xl overflow-hidden">
                <img className="object-cover h-52 w-full" src={image} alt={alt} />
            </a>
        )
    }
}

export default Products;