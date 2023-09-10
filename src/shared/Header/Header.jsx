import { useContext, useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/polar-bear.png";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/beers", label: "Beers" },
  ];

  const [open, setOpen] = useState(false);

  const [isBg, setIsBg] = useState(false);

  const setHeaderBg = () => setIsBg(!isBg);

  const [isShowName, setIsShowName] = useState(false);

  // const signout = () => {
  //   logOut().
  // }

  return (
    <header
      className={`py-3 md:py-0 header ${
        isBg && "header-bg"
      } h-auto md:h-[150px]`}
    >
      <nav className="h-full lg:w-10/12 w-11/12 mx-auto flex items-center justify-between">
        <div className="logo">
          <h1 className=" text-3xl font-bold text-[#1A1919]">
            <img className="w-[75px] animate-pulse" src={logo} alt="" />
          </h1>
        </div>
        <div className="mebubar">
          <div
            className="md:hidden"
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(!open)}
            onClick={() => setOpen(!open)}
          >
            <span className="text-2xl">
              {open ? (
                <FontAwesomeIcon icon={faAnchor}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
              )}
            </span>
          </div>
          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-1 md:static  z-[999] absolute right-0 ${
              open ? "top-16 lg:top-12" : "-top-96"
            }  md:bg-transparent bg-gray-200 p-4 rounded-md duration-200`}
          >
            {routes.map((route, idx) => (
              <Nav route={route} key={idx} setBg={setHeaderBg}></Nav>
            ))}
            {user && (
              <li className="block md:inline md:mx-3">
                <div className="flex flex-col items-center">
                  <div>
                    <img
                      onClick={() => setIsShowName(!isShowName)}
                      src={user?.photoURL}
                      className="rounded-full scale-75 border-4 p-1 duration-200 border-blue-500"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <span
                    className={`${
                      isShowName ? "inline-block" : "hidden"
                    } text-base md:text-lg md:font-medium font-normal text-blue-500`}
                  >
                    {user?.displayName}
                  </span>
                </div>
              </li>
            )}
            {user && (
              <li className="block md:inline md:mx-3">
                <button
                  title="Click to logout"
                  onClick={() => logOut()}
                  className="text-red-600 text-4xl font-semibold"
                >
                  <MdLogout></MdLogout>{" "}
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
