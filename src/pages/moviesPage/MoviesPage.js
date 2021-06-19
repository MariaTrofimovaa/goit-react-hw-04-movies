import React, { Component } from "react";
import { searchMovies } from "../../services/api";
import parseQueryString from "../../helper/parseQueryString";
import MoviesList from "../../components/moviesList/MoviesList";
import { SearchForm } from "./MoviesPageStyled";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      const currentQuery = parseQueryString(this.props.location.search).query;
      console.log(currentQuery);

      searchMovies(currentQuery).then((movies) => {
        this.setState({ movies });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const query = parseQueryString(prevProps.location.search).query;
    const currentQuery = parseQueryString(this.props.location.search).query;

    if (query !== currentQuery) {
      searchMovies(this.state.query).then((movies) => {
        this.setState({ movies });
      });
    }
  }

  onHandleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(`?query=${this.state.query}`);
  };

  render() {
    const { query, movies } = this.state;

    return (
      <>
        <SearchForm>
          <form onSubmit={this.onHandleSubmit}>
            <input
              type="text"
              value={query}
              onChange={this.onHandleChange}
              className="input"
            />
            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </SearchForm>
        {movies && <MoviesList movies={movies} query={query} />}
      </>
    );
  }
}

export default MoviesPage;
