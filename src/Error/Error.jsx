import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Error = ({ message }) => {
    let navigate = useNavigate();

    return (
        <div className="my-auto md:space-y-2">
            <h1 className="text-lightGray text-lg md:text-2xl text-center font-semibold tracking-wider">ERROR:</h1>
            <h2 className="text-medGray text-3xl md:text-5xl font-bold text-center">{ message }</h2>
            <div className="flex justify-center">
                <button onClick={() => navigate(-1)}
                    className="mt-3.5 px-7 py-3.5 md:py-4 md:text-xl bg-green rounded-lg text-background"
                >Take me back!</button>
            </div>
        </div>
    )
}

Error.propTypes = {
    message: PropTypes.node
}

export default Error;