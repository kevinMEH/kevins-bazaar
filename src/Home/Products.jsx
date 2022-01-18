import { BrowserView } from "react-device-detect";

import couchAndPillows from "../assets/couchAndPillows.jpeg";
import girlJumpCouch from "../assets/girlJumpCouch.jpeg";
import chairsAndTable from "../assets/chairsAndTable.jpeg";

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
                <Card image={chairsAndTable} alt="Navy chairs and wood table on yellow and brown background" />
                <BrowserView>
                    {/* TODO: Populate */}
                    <Card image={couchAndPillows} alt={"Couch and Pillows"} />
                    <Card image={couchAndPillows} alt={"Couch and Pillows"} />
                    <Card image={couchAndPillows} alt={"Couch and Pillows"} />
                </BrowserView>
            </div>
        </div>
    )
}

const Card = ({ image, alt, url }) => {
    return (
        // TODO: <Link />
        <a href={url} className="block rounded-xl overflow-hidden">
            <img className="object-cover h-52 w-full" src={image} alt={alt} />
        </a>
    )
}

export default Products;