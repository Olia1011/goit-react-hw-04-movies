import React, { Component } from "react";
import { fetchReview } from "../Server/Server";

class Reviews extends Component {
  state = {
    data: "",
  };
  componentDidMount() {
    fetchReview(this.props.match.params.movieId).then((res) =>
      this.setState({ data: res })
    );
  }

  render() {
    return (
      <ul>
        {this.state.data.length
          ? this.state.data.map((item, id) => (
              <li key={id}>
                <h2>Author:{item.author}</h2>
                <p>{item.content}</p>
              </li>
            ))
          : "We dont have any reviews for this movie"}
      </ul>
    );
  }
}

export default Reviews;
