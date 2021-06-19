import React from "react";
import { Link, withRouter } from "react-router-dom";
import { MovieListContainer } from "./MovieListStyled";
import defaultMovie from "../../images/defaultMovie.png";

const MoviesList = ({ movies, location, query }) => {
  return (
    <MovieListContainer>
      {movies &&
        movies.map((movie) => {
          return (
            <li key={movie.id} className="listItem">
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location, query },
                }}
                className="link"
              >
                <img
                  className="listImg"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : defaultMovie
                  }
                  alt={movie.original_title || movie.title}
                />
                <p className="listTitle">
                  {movie.original_title || movie.title}
                </p>
              </Link>
            </li>
          );
        })}
    </MovieListContainer>
  );
};

export default withRouter(MoviesList);
