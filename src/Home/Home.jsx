import Landing from "./Landing";
import Cards from "./Cards";

const Home = () => {
	return (
        <div className="space-y-24 pt-24 md:pt-28 lg:pt-[15vh] pb-32 lg:pb-40 md:space-y-32 lg:space-y-48">
			<Landing />
            <Cards />
        </div>
	);
};

export default Home;