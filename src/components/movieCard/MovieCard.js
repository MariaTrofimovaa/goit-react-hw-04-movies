import React from "react";
import defaultMovie from "../../images/defaultMovie.png";
import { MovieCardContainer } from "./MovieCardStyled";

const MovieCard = ({
  title,
  poster_path,
  vote_average,
  overview,
  release_date,
  genres,
}) => {
  return (
    <MovieCardContainer>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultMovie
        }
        alt={title}
        className="poster"
      />
      <div>
        {release_date && (
          <h2 className="title">
            {title} ({release_date.slice(0, 4)})
          </h2>
        )}
        <p className="vote">User Score: {vote_average * 10} %</p>
        <h2 className="title">Overview</h2>
        <p className="overview">{overview}</p>
        <h3 className="title">Genre</h3>
        <div>
          {genres && genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
        </div>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
