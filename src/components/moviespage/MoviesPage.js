import React, { Component } from "react";
import FilmList from "../FilmList/FilmList";
import { fetchSearchMovies } from "../Server/Server";
import queryString from "query-string";

export class MoviesPage extends Component {
  state = {
    search: "",
    searchResult: "",
  };
  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      const { query } = queryString.parse(search);

      fetchSearchMovies(query).then((res) =>
        this.setState({ searchResult: res })
      );
      this.setState({ search: query });
    }
  }
  handleChange = (ev) => {
    this.setState({ search: ev.target.value });
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    fetchSearchMovies(this.state.search).then((res) =>
      this.setState({ searchResult: res })
    );

    this.props.history.push({...this.props.location,
      search: `query=${this.state.search}`,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Search
          </button>
        </form>

        <FilmList list={this.state.searchResult}></FilmList>
      </div>
    );
  }
}

export default MoviesPage;
