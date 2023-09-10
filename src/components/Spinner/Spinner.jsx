import { BallTriangle, Triangle } from "react-loader-spinner";
import beerLoadig from "../../assets/cheers.gif";

export const BeerLoading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-fit h-fit animate-pulse">
        <img className="scale-50" src={beerLoadig} alt="" />
      </div>
    </div>
  );
};
export const LoadingTriangle = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-fit h-fit animate-pulse">
        <Triangle
          height="200"
          width="200"
          color="#2ebff0"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>
  );
};

const Spinner = () => {
  return (
    <div className="w-fit h-fit mx-auto my-6">
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="#2ebff0"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
