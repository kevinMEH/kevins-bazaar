import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import couchAndPillows from "../assets/couchAndPillows.jpeg";
import girlJumpCouch from "../assets/girlJumpCouch.jpeg";
import chairsAndTable from "../assets/chairsAndTable.jpeg";
import arrow from "../assets/chevronRight.svg";


const Products = () => {
    return (
        <div>
            <h2 className="text-darkGray font-bold text-3xl md:text-4xl text-center px-4 pb-5 md:pb-7">Check out our newest releases.</h2>
            <div className="space-y-7 md:space-y-10">
                <Card image={couchAndPillows} alt={"Gray couch and brown pillows"} />
                <Card image={girlJumpCouch} alt={"Girl jumping on gray couch"} />
                <Card image={chairsAndTable} alt="Navy chairs and wood table on yellow and brown background" end={true} />
            </div>
        </div>
    )
}

const Card = ({ image, alt, end = false }) => {
    return (
        <Link to={"catalog"} className={ end ? "relative block rounded-xl overflow-hidden" : "block rounded-xl overflow-hidden" }>
            <img className="object-cover h-52 w-full" src={image} alt={alt} />
            { end ? <>
                <div className="absolute bg-overlay top-0 left-0 right-0 bottom-0" />
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-center">
                    <p className="text-2xl md:text-4xl text-background font-semibold tracking-wide">View More</p>
                    <img src={arrow} className="inline h-8 md:h-12" />
                </div>
            </> : <></> }
        </Link>
    )
}

Card.propTypes = {
    image: PropTypes.any,
    alt: PropTypes.string,
    url: PropTypes.string,
    end: PropTypes.bool
}

export default Products;