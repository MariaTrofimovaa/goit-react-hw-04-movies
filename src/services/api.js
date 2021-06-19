import axios from "axios";

const apiKey = "5b4dc2f477ae37de2dcdca88c213c32b";

// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

//  поиск кинофильма по ключевому слову на странице фильмов.
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

// запрос полной информации о фильме для страницы кинофильма.
export const fetchMovieDetail = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// запрос информации о актёрском составе для страницы кинофильма.
export const fetchMovieCast = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

// запрос обзоров для страницы кинофильма.
export const fetchMovieReviews = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
