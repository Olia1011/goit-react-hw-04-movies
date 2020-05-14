import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import style from "./app.module.css";

const AsyncMoviesPage = lazy(() =>
  import("../moviespage/MoviesPage" )
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    "../moviedetails/MovieDetailsPage")
);
const AsyncHomePage = lazy(() =>
  import("../homepage/HomePage")
);

export default class App extends Component {
  render() {
    return (
      <div>
        <header className={style.header}>
          <NavLink
            to=""
            exact
            activeClassName={style.active}
            className={style.link}
          >
            Menu
          </NavLink>

          <NavLink
            to="/movie"
            exact
            activeClassName={style.active}
            className={style.link}
          >
            Movie
          </NavLink>
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={AsyncHomePage}></Route>
              <Route
                path="/movie/:movieId"
                component={AsyncMovieDetailsPage}
              ></Route>
              <Route path="/movie" component={AsyncMoviesPage}></Route>
              <Route component={AsyncHomePage}></Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}
