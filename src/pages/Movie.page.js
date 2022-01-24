import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import Slider from "react-slick";

// Components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Crew from "../components/Cast/crew.component";
import Cast from "../components/Cast/Cast.components";
// Context
import { MovieContext } from "../Context/movie.context";

const Movie = () => {
  const { id } = useParams();
  const {movie} = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`movie/${id}/credits`);
      setCast(getCast.data.cast);

    };
    requestCast();
  }, [id]);
  useEffect(() => {
    const requestCrew = async () => {
      const getCrew = await axios.get(`movie/${id}/credits`);
      setCrew(getCrew.data.crew);
      
    };
    requestCrew();
  }, [id]);

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <MovieHero/>
    <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
             <div className="flex flex-col item-start gap-3">
              <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
              <p>
                {movie.overview}
              </p>
             </div>
             <div className="my-8">
                <hr />
            </div>
             <div className="my-8 ">
              <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast</h2>
              <Slider {...settingsCast}>
                {cast.map((castdata) => (
                  <Cast
                    image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                    castName={castdata.original_name}
                    role={castdata.character}
                  />
                ))}
              </Slider>
             </div>
             <div className="my-8">
                <hr />
            </div>
             <div className="my-8">
              <h2 className="text-gray-800 font-bold text-2xl mb-4">Crew</h2>
              <Slider {...settingsCast}>
                {crew.map((crewdata) => (
                  <Crew
                    image={`https://image.tmdb.org/t/p/original/${crewdata.profile_path}`}
                    castName={crewdata.original_name}
                    role={crewdata.job}
                  />
                ))}
              </Slider>
             </div>
             <div className="hidden lg w-full fixed bottom-0 z-50 items-center gap-3 md:w-screen lg:w-full">
                    <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-4 rounded">
                      BookTickets
                    </button>
                </div>
              </div>
    </>
  );
};

export default Movie;
