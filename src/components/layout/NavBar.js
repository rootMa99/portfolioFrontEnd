import { NavLink } from "react-router-dom";
import c from "./NavBar.module.css";

const NavBar = (p) => {
  return (
    <header className={c.header}>
      <nav className={c.nav}>
        <ul className={c.linkHolder}>
          <li>
            <div className={c.logo}>AZ</div>
          </li>
          <li>
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              TimeLine
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
