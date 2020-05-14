import React from "react";
import { Link, withRouter } from "react-router-dom";
const FilmList = ({ list, location }) => {
  return (
    <ul>
      {list &&
        list.map(elem => (
          <li key={elem.id}>
            <Link
              to={{
                pathname: `/movie/${elem.id}`,
                state: { from: location }
              }}
            >
              {elem.title || elem.original_title || elem.original_name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(FilmList);
