import React, { Component } from "react";
import { fetchMovies } from "../../services/api";
import MoviesList from "../../components/moviesList/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMovies().then((movies) => {
      this.setState({ movies });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <MoviesList movies={movies} location={this.props.location} />
      </>
    );
  }
}

export default HomePage;
