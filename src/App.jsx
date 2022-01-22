import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import Error from "./Error/Error";

const App = () => {
    return (
        <div className="p-6">
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="catalog" element={ <Catalog/> } />
                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;