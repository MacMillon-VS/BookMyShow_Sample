import React, { useContext} from 'react';
import {BsFillHeartFill} from "react-icons/bs"

//Context
import { MovieContext } from '../../Context/movie.context';
const launchRazorPay = () => {
    let options = {
      key: "rzp_test_AODI4p7jEuYi8h",
      amount: 10000,
      currency: "INR",
      name: "BMS Clone",
      description: "Movie Purchase",
      image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        alert("Payment Done")
      },
      theme: {color: "#c4242d"}
    };
  
    let rzp = new window.Razorpay(options);
    rzp.open();
  };
const MovieInfoLg = () => {
    const { movie } = useContext(MovieContext);  


    return (
        <>
          <div className="flex flex-col gap-3 lg:gap-8">
                        
              <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
                <h1 className="text-white lg:text-4xl font-bold hidden lg:block">
                    {movie.original_title}
                </h1>
                <div className="text-white font-bold items-center flex flex-row gap-2 md:px-4">
                <BsFillHeartFill className="w-7 h-7" style={{ color : "crimson" }}/>
                <h2 className='text-xl'>93.7%</h2>
                    <h4 className='font-medium'>
                        500 ratings &gt;
                    </h4>
                    </div>

                    <div className="w-30 bg-gray-700/50 py-3 gap-5 text-white flex justify-between gap-2 md:px-4 rounded-md">
                    <h4 className='font-bold'>Add your rating & review </h4>
                    
                     <div>
                    <button className="bg-white flex items-center text-gray-800 font-medium py-3 px-5 rounded">
                      Rate Now
                    </button>
                    </div>
               </div>
                <div className="text-white font-medium flex flex-col gap-2 md:px-4">
                    <h4 className='text-black bg-white w-20 px-2'>2D, 4DX</h4>
                    <h4 className='text-black bg-white w-20 px-2'>Tamil,{movie.original_language}</h4>
                    <h4>{movie.runtime} minutes &bull; Action, Adventure &bull; UA &bull; 16 Dec, 2021 </h4>
                </div>
                <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                    <button onClick={launchRazorPay} className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded">
                      BookTickets
                    </button>
                </div>
              </div>
          </div>
        </>
    )
}
const MovieInfoSm = () => {

    return(
        <>
        
        </>
    );
};


const MovieInfo = () => {
    return (
      <>
       
          <div className=" px-2 py-4 md:hidden">{/*Mobile Screen*/}
            <MovieInfoSm />
          </div>
          <div className=" px-2 py-4 hidden md:flex lg:hidden">{/*Tablet Screen*/}
            <MovieInfoSm />
          </div>
          <div className="hidden lg:flex">{/*Large Screen*/}
            <MovieInfoLg />
          </div>
       
      </>
    );
  };
  export default MovieInfo;