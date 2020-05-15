import React, { Component } from "react";
import { fetchCast } from "../Server/Server";
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
          this.state.castData.map((item, id) => (
            <li key={id} className={style.Actors}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt={item.name}
                  style={image}
                ></img>
              </div>
              <p>{item.name}</p>
              <p>Character:{item.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Cast;
