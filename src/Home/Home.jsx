import Landing from "./Landing";
import Cards from "./Cards";

const Home = () => {
	return (
        <div className="space-y-24 pt-24 md:pt-28 pb-32 md:space-y-32">
			<Landing />
            <Cards />
        </div>
	);
};

export default Home;