import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {BiSearch, BiShareAlt} from "react-icons/bi";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineCaretDown} from "react-icons/ai";
import logo from "../../images/bookmyshow-logo.png";
import { MovieContext } from '../../Context/movie.context';

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
    <div className="text-gray-800 flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">{movie.original_title}</h3>
   </div>
   <div className="w-8 h-8">
      <BiShareAlt className="w-full h-full" />
   </div>
</div>
    </>
  );
};
const NavLg = () => {
  return (
    <>
    <div className="w-full flex justify-between gap-4 items-center mx-auto mr-10">

        <div className="w-40  ml-10">
        <Link to={`/`}>
          <img src={logo} alt="{logo}" className="w-full ml-2" />
        </Link>
        </div>
        <div className="w-full h-9 my-2 flex bg-white items-center px-3 py-1 rounded-md ">
          <BiSearch className="w-5 h-5 " style={{color:'grey'}} />
          <input
            type="search"
            className="w-full px-3 text-sm"
            placeholder="Search for Movies, Events, Plays, Sports and Activities "
          />
        </div>
        <div className="flex justify-end gap-1 items-center mx-auto ml-40">
        <div className="flex items-center gap-1">
          <p className="text-gray-300 text-sm hover:text-white">Chennai</p>
          <AiOutlineCaretDown className="w-4" style={{color:'white'}} />
        </div>

      <div className=" px-1 mx-2">
        <button className="text-white font-normal text-sm bg-red-500 px-4 py-1 rounded-md">
  Signin
</button>
       </div>
       <div className="">
         <GiHamburgerMenu className="w-5 h-5 " style={{color:'#cbccd0'}} />
</div>
       </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
     <nav >
        <div className="px-2 py-4 md:hidden">{/*Mobile Screen*/}
          <NavSm />
        </div>
        <div className="px-2 py-4 hidden md:block lg:hidden">{/*Tablet Screen*/}
          <NavSm />
        </div>
        <div className="bg-bnav-700 hidden lg:flex ">{/*Large Screen*/}
          <NavLg/>
          
        </div>
     </nav>
    </>
  );
};

export default MovieNavbar;
