import React from "react";
import { Link, withRouter } from "react-router-dom";
const FilmList = ({ list, location }) => {
  return (
    <ul>
      {list &&
        list.map(item => (
          <li key={item.id}>
            <Link
              to={{
                pathname: `/movie/${item.id}`,
                state: { from: location }
              }}
            >
              {item.title || item.original_title || item.original_name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(FilmList);
