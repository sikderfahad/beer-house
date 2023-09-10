import { Outlet } from "react-router-dom";
import ToastBox from "../components/Toast/ToastBox";
import Header from "../shared/Header/Header";
import { BeerLoading } from "../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change this value as needed
  }, []);
  return (
    <div>
      {!isLoading ? (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <ToastBox></ToastBox>
          <Footer></Footer>
        </div>
      ) : (
        <BeerLoading></BeerLoading>
      )}
    </div>
  );
};

export default Root;
