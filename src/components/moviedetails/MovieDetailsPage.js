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
    movieDetails: "",
  };
  componentDidMount() {
    fetchMovieInfo(this.props.match.params.movieId).then((res) =>
      this.setState({ movieDetails: res })
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
    } = this.state.movieDetails;

    return (
      <div>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={style.button}
        >
          Go back
        </button>
        {this.state.movieDetails && (
          <div>
            <div className={style.filmInfo}>
              <img
                src={
                  poster_path &&
                  `https://image.tmdb.org/t/p/w500/${poster_path}`
                }
                alt={original_title}
              />
              <div className={style.filmInfo_text}>
                <h1>
                  {title || original_title} ({parseInt(release_date)})
                </h1>
                <p>User score:{vote_average * 10}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>

                {genres &&
                  genres.map((el, idx) => <span key={idx}> {el.name}</span>)}
              </div>
            </div>

            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${this.props.match.url}/review`}>Review</NavLink>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Route
                path={`${this.props.match.path}/cast`}
                component={AsyncCast}
              ></Route>
              <Route
                path={`${this.props.match.path}/review`}
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
