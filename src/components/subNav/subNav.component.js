import React from "react";
import { Link } from "react-router-dom";
const SubNavLg = () => {
    return (
      <>
    <nav className="hidden lg:flex bg-bnav-800 relative flex flex-wrap items-center justify-between px-2  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between active:text-white font-bold">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Movie</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Streams</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Events</Link>
          <Link to={`/plays`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Plays</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Sports</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Activites</Link>
          <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-light text-gray-300 hover:text-white font-bold">Buzz</Link>        
          </div>
          <div
            className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">ListYourShow</Link>
              </li>
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Corporates</Link>
              </li>
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Offers</Link>
              </li>
              <li className="nav-item">
              <Link to={`/`} className="text-sm inline-block mr-4 py-2 font-normal text-gray-300 hover:text-white font-bold">Gift Cards</Link>
             </li>
            </ul>
          </div>
        </div>
        </nav>
      </>
    );
  
  };
  
  
  
  export default SubNavLg;
  