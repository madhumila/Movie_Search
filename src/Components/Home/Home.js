import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "../Home/Home.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../Features/Movies/Movieslices";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
