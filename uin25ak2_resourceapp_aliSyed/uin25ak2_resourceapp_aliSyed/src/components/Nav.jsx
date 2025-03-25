import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/html" className={({ isActive }) => (isActive ? "selected" : "")}>
            HTML
          </NavLink>
        </li>
        <li>
          <NavLink to="/css" className={({ isActive }) => (isActive ? "selected" : "")}>
            CSS
          </NavLink>
        </li>
        <li>
          <NavLink to="/javascript" className={({ isActive }) => (isActive ? "selected" : "")}>
            JavaScript
          </NavLink>
        </li>
        <li>
          <NavLink to="/react" className={({ isActive }) => (isActive ? "selected" : "")}>
            React
          </NavLink>
        </li>
        <li>
          <NavLink to="/sanity" className={({ isActive }) => (isActive ? "selected" : "")}>
            Sanity
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
