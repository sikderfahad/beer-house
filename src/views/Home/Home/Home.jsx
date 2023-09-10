import BeerCard from "../../../shared/Card/Card";
import useLoadBeers from "../../../hooks/useLoadBeers";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const allBeers = useLoadBeers();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10 ">
      <h1 className="text-center text-lg md:text-4xl font-medium mb-6 md:mb-12">
        Find Your Favourite Beer!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {allBeers.map((beer, idx) => (
          <div key={idx}>
            <BeerCard beer={beer}></BeerCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
