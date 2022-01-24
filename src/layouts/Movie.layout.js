import React from 'react'
import SubNavLg from "../components/subNav/subNav.component";

//Components
import MovieNavbar from "../components/Navbar/movieNavbar.component.js";


const MovieLayout = (props) => {

  return (
    <div>
      <MovieNavbar />
      <SubNavLg />
      {props.children}
    </div>
  );
};

export default MovieLayout;
