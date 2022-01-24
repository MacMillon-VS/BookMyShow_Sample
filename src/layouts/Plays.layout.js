import React from "react";

//Components
import Navbar from "../components/Navbar/Navbar.component.js";
import SubNavLg from "../components/subNav/subNav.component";
import PlaysFilters from "../components/PlaysFilters/PlaysFilters.components";

const PlaysLayout = (props) => {
  return (
    <div>
      <Navbar />
      <SubNavLg/>
      
      {props.children}
    </div>
  );
};

export default PlaysLayout;
