import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import MovieCard from "../../components/movieCard/MovieCard";
import {
  fetchMovieDetail,
  fetchMovieCast,
  fetchMovieReviews,
} from "../../services/api";
import Cast from "../../components/cast/Cast";
import Reviews from "../../components/reviews/Reviews";
import { MovieDetailsContainer } from "./MovieDetailsPageStyled";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
    from: "/",
    query: "",
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const response = await fetchMovieDetail(movieId);
    const cast = await fetchMovieCast(movieId);
    const reviews = await fetchMovieReviews(movieId);

    this.setState({ movie: response, cast, reviews });

    if (this.props.location.state) {
      this.setState({
        from: this.props.location.state.from.pathname,
        query: this.props.location.state.query,
      });
    }
  }

  handleGoBack = () => {
    this.props.history.push({
      pathname: this.state.from,
      search: this.state.query ? `query=${this.state.query}` : null,
    });
  };

  render() {
    const { movie, cast, reviews } = this.state;
    const { url, path } = this.props.match;
    return (
      <MovieDetailsContainer>
        <button className="btn" type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <MovieCard {...movie} />

        <h3 className="subTitle">Additional Info:</h3>
        <NavLink
          exact
          className="navLink"
          activeClassName="activeNavLink"
          to={{
            pathname: `${url}/cast`,
          }}
        >
          Cast
        </NavLink>
        <NavLink
          exact
          className="navLink"
          activeClassName="activeNavLink"
          to={{
            pathname: `${url}/reviews`,
          }}
        >
          Reviews
        </NavLink>

        <Switch>
          <Route
            path={`${path}/cast`}
            render={(props) => <Cast {...props} cast={cast} />}
          />
          <Route
            path={`${path}/reviews`}
            render={(props) => <Reviews {...props} reviews={reviews} />}
          />
        </Switch>
      </MovieDetailsContainer>
    );
  }
}

export default MovieDetailsPage;
