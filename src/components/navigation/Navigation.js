import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationContainer } from "./NavigationStyled";
import movieRoutes from "../../routes/movieRoutes";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul className="navTitle">
        {movieRoutes.map((route) => {
          return route.name ? (
            <li className="navList" key={route.path}>
              <NavLink
                to={route.path}
                exact={route.exact}
                className="navListLink"
                activeClassName="activeNavLink"
              >
                {route.name}
              </NavLink>
            </li>
          ) : null;
        })}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;

// ****************************************************

// <NavigationContainer>
//   <ul className="navTitle">
//     <li className="navList">
//       <NavLink
//         to="/"
//         exact
//         className="navListLink"
//         activeClassName="activeNavLink"
//       >
//         Home
//       </NavLink>
//     </li>

//     <li className="navList">
//       <NavLink
//         to="/movies"
//         exact
//         className="navListLink"
//         activeClassName="activeNavLink"
//       >
//         Movies
//       </NavLink>
//     </li>
//   </ul>
// </NavigationContainer>
