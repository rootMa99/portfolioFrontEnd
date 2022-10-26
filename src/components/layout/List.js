
import { NavLink } from "react-router-dom";
import c from "./List.module.css";

const List = (p) => {
 

 const onClickHandler = (e) => {
   p.onClose(false);
 
 };
    
    
   return (
     <ul className={c.linkHolder} onClick={onClickHandler}>
       <li className={c.linkOne} onClick={onClickHandler}>
         <NavLink
           to="home"
           className={({ isActive }) => (isActive ? c.activeLink : c.link)}
         >
           Home
         </NavLink>
       </li>
       <li className={c.linktwo} onClick={onClickHandler}>
         <NavLink
           to="/about"
           className={({ isActive }) => (isActive ? c.activeLink : c.link)}
         >
           About
         </NavLink>
       </li>
       <li className={c.linkThree} onClick={onClickHandler}>
         <NavLink
           to="/timeline"
           className={({ isActive }) => (isActive ? c.activeLink : c.link)}
         >
           TimeLine
         </NavLink>
       </li>
       <li className={c.linkFour} onClick={onClickHandler}>
         <NavLink
           to="/articles"
           className={({ isActive }) => (isActive ? c.activeLink : c.link)}
         >
           Articles
         </NavLink>
       </li>
       <li className={c.linkFive} onClick={onClickHandler}>
         <NavLink
           to="/portfolio"
           className={({ isActive }) => (isActive ? c.activeLink : c.link)}
         >
           Portfolio
         </NavLink>
       </li>
     </ul>
   );
};

export default List;
