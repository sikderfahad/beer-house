import { useEffect, useState } from "react";
import BeerCard from "../../shared/Card/Card";
import { BeerLoading } from "../../components/Spinner/Spinner";
import useTitle from "../../hooks/useTitle";

const Beers = () => {
  useTitle("Beers");

  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Function to fetch beers from the Punk API
    const fetchBeers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
        );
        const newBeers = await response.json();

        if (newBeers.length === 0) {
          setHasMore(false);
          setLoading(false);
          return;
        }

        setBeers((prevBeers) => [...prevBeers, ...newBeers]);
        setPage(page + 1);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching beers:", error);
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchBeers();
    }
  }, [page, hasMore]);

  // Function to handle scrolling and trigger loading more beers
  const handleScroll = () => {
    if (!loading && hasMore) {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight - scrollTop === clientHeight) {
        setPage(page + 1);
      }
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Change this value as needed
  }, []);

  return (
    <div>
      {!isLoading ? (
        <div className="w-11/12 md:w-10/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {beers.map((beer, idx) => (
            <div key={idx}>
              <BeerCard beer={beer}></BeerCard>
            </div>
          ))}
          {loading && <p>Loading...</p>}
          {!hasMore && <p>No more beers to load.</p>}{" "}
        </div>
      ) : (
        <BeerLoading></BeerLoading>
      )}
    </div>
  );
};

export default Beers;
