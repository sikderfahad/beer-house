import { Outlet } from "react-router-dom";
import ToastBox from "../components/Toast/ToastBox";

const PreLogin = () => {
  return (
    <div>
      <Outlet></Outlet>
      <ToastBox></ToastBox>
    </div>
  );
};

export default PreLogin;
