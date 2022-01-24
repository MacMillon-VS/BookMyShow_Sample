import axios from 'axios';
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import SubNavLg from "../components/subNav/subNav.component";

//Components
import MovieNavbar from "../components/Navbar/movieNavbar.component.js";

import { MovieContext } from '../Context/movie.context'; 

const MovieLayout = (props) => {
  const {id} = useParams();
  const { setMovie } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
       const getMovieData = await axios.get(`/movie/${id}`);
       setMovie(getMovieData.data);
    };
    requestMovie();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      <MovieNavbar />
      <SubNavLg />
      {props.children}
    </div>
  );
};

export default MovieLayout;
