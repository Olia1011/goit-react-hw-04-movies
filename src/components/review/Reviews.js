import React, { Component } from "react";
import { fetchReview } from "../Server/Server";

class Reviews extends Component {
  state = {
    reviewData: "",
  };
  componentDidMount() {
    fetchReview(this.props.match.params.movieId).then((res) =>
      this.setState({ reviewData: res })
    );
  }

  render() {
    return (
      <ul>
        {this.state.reviewData.length
          ? this.state.reviewData.map((el, idx) => (
              <li key={idx}>
                <h2>Author:{el.author}</h2>
                <p>{el.content}</p>
              </li>
            ))
          : "We dont have any reviews for this movie"}
      </ul>
    );
  }
}

export default Reviews;
