import React from "react";

//Components
import Navbar from "../components/Navbar/Navbar.component.js";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";
import SubNavLg from "../components/subNav/subNav.component";

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <SubNavLg/>
      <HeroCarousal />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
