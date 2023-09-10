import axios from "axios";
import { useEffect, useState } from "react";

const useLoadBeers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=1&per_page=9")
      .then((res) => setData(res.data));
  }, []);

  return data;
};

export default useLoadBeers;
