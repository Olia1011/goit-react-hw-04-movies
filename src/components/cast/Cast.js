import React, { Component } from "react";
import { fetchCast } from "../baseOfRequest/BaseOfRequest";
import style from "./cast.module.css";

class Cast extends Component {
  state = {
    castData: "",
  };
  componentDidMount() {
    fetchCast(this.props.match.params.movieId).then((res) =>
      this.setState({ castData: res })
    );
  }

  render() {
    const image = { width: "100px" };
    return (
      <ul className={style.castList}>
        {this.state.castData &&
          this.state.castData.map((el, idx) => (
            <li key={idx} className={style.castList__item}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                  alt={el.name}
                  style={image}
                ></img>
              </div>
              <p>{el.name}</p>
              <p>Character:{el.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Cast;
