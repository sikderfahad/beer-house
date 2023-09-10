import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ route, setBg }) => {
  return (
    <li className="block md:inline md:mx-3">
      <NavLink
        onClick={setBg}
        className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : "text-[#757575] navLink text-base md:text-lg md:inline block"
        }
        to={route.path}
      >
        {route.label}
      </NavLink>
    </li>
  );
};

export default Nav;
