import React, { useContext } from 'react';
import MovieInfo from './MovieInfo.component';
import {BsShare} from 'react-icons/bs';

//Context
import { MovieContext } from '../../Context/movie.context';

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
    return (
        <>
          <div>
              {/* Mobile */}
             <div className="relative md:hidden w-full" 
                  style={{height: "calc(180vw)"}}>
                <div className="absolute z-20 bottom-4 left-4">
                  <MovieInfo />
                </div>
                <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster" 
                    className="w-full h-full"
                />
                
             </div>
             {/* Medium */}
             <div className="relative hidden md:block w-full lg:hidden" 
                  style={{height: "calc(100vw)"}}
             >
                <div className="absolute z-20 bottom-4">
                  <MovieInfo />
                </div>
                <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster" 
                    className="w-full h-full"
                />
             </div>
             {/* Large */}
             <div className="relative hidden lg:block " style={{ height: "30rem" }}>
              <div 
                className="absolute z-10 w-full h-full" 
                style={{ backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }} 
              />
            <div className="h-full absolute z-30 left-24 top-5 flex items-center gap-10">
              <div className=" w-64 h-96">
                  <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster" 
                    className="w-full h-full rounded-xl"
                  />
              </div>
              
                <div className='h-full'>
                <MovieInfo />
                </div>
            </div>

              <img 
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="poster" 
                className="w-full h-full"
              />
             </div>
             <div className='hidden lg:flex absolute right-20 top-20 my-20 flex gap-3 items-center text-gray-200 font-bold bg-gray-900/70 px-3 py-2 rounded-md'>
                        <BsShare className="w-7 h-7" style={{ color : "white" }}/>
                        <h4>Share</h4>
                    </div>
          </div>
        </>
    )
}

export default MovieHero;