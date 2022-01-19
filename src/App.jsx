import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";

const App = () => {
    return (
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="catalog" element={ <Catalog/> } />
                {/* <Route path="*" element={} */}
            </Routes>
    )
}



export default App;
