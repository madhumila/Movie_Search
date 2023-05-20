import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import { Settings } from "../../Common/Settings";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.items.movies);
  const shows = useSelector((state) => state.items.shows);

  console.log(movies);
  let renderMovies = "",
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div classname="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div classname="shows-error">
        <h3>{shows.error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
