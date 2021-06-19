import { lazy } from "react";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/movieDeteailsPage/MovieDetailsPage")
);
const NotFound = lazy(() => import("../pages/notFound/NotFound"));

const ROUTES = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    name: "Home",
  },

  {
    path: "/movies",
    exact: true,
    component: MoviesPage,
    name: "Movies",
  },

  {
    path: "/movies/:movieId",
    exact: false,
    component: MovieDetailsPage,
    name: null,
  },

  {
    path: "",
    exact: false,
    component: NotFound,
    name: null,
  },
];

export default ROUTES;
