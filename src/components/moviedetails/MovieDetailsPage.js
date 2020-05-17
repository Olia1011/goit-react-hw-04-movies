import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";
import { fetchMovieInfo } from "../Server/Server";
import style from "./movie.module.css";

const AsyncCast = lazy(() =>
  import("../Cast/Cast")
);
const AsyncReviews = lazy(() =>
  import("../Review/Reviews")
);

export class MovieDetailsPage extends Component {
  state = {
    movie: "",
    
    
  };
  componentDidMount() {
    fetchMovieInfo(this.props.match.params.movieId).then((res) =>
      this.setState({ movie: res })
    );
  }
  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    } else {
      history.push("/");
    }
  };

  render() {
    const {
      poster_path,
      original_title,
      title,
      overview,
      genres,
      release_date,
      vote_average,
    } = this.state.movie;

    return (
      <div>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={style.button}
        >
          Go back
        </button>
        {this.state.movie && (
          <div>
            <div className={style.filmInfo}>
              <img
                src={
                  poster_path &&
                  `https://image.tmdb.org/t/p/w500/${poster_path}`
                }
                alt={original_title}
              />
              <div className={style.film_text}>
                <h1>
                  {title || original_title} ({parseInt(release_date)})
                </h1>
                <p>User score:{vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>

                {genres &&
                  genres.map((item, id) => <span key={id}> {item.name}</span>)}
              </div>
            </div>

            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to={`${this.props.match.url}/Cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${this.props.match.url}/Review`}>Review</NavLink>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Route
                path={`${this.props.match.path}/Cast`}
                component={AsyncCast}
              ></Route>
              <Route
                path={`${this.props.match.path}/Review`}
                component={AsyncReviews}
              ></Route>
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
