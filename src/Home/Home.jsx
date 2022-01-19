import Header from "../components/Header";
import Landing from "./Landing";
import Products from "./Products";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="p-6 space-y-24">
			<Header />
			<Landing />
            <Products />
            <Footer />
		</div>
	);
};

export default Home;
