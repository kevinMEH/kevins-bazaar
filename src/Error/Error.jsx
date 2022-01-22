import { useNavigate } from "react-router-dom";

const Error = () => {
    let navigate = useNavigate();

    return (
        <div className="py-24">
            <h1 className="text-lightGray text-lg text-center font-semibold tracking-wider">ERROR:</h1>
            <h2 className="text-medGray text-3xl font-bold text-center">Page not found!</h2>
            <div className="flex justify-center">
                <button onClick={() => navigate(-1)}
                    className="mt-3.5 px-7 py-3.5 bg-green rounded-lg text-background"
                >Take me back!</button>
            </div>
        </div>
    )
}

export default Error;