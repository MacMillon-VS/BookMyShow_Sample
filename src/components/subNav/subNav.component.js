import React from "react";
import { Link } from "react-router-dom";
const SubNavLg = () => {
    return (
      <>
    <nav className="hidden lg:flex bg-bnav-800 relative flex flex-wrap items-center justify-between px-2  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Movie</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Streams</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Events</Link>
          <Link to={`/plays`} className="text-sm inline-block mr-4 py-2 text-white">Plays</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Sports</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Activites</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Buzz</Link>        
          </div>
          <div
            className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">ListYourShow</Link>
              </li>
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Corporates</Link>
              </li>
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Offers</Link>
              </li>
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 text-white">Gift Cards</Link>
             </li>
            </ul>
          </div>
        </div>
        </nav>
      </>
    );
  
  };
  
  
  
  export default SubNavLg;
  