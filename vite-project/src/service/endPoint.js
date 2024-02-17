import { component } from "react";

class endPoint extends component {
  topRated = () => {
    return "movie/top_rated";
  };

  upComing = () => {
    return "movie/upcoming";
  };

  popular = () => {
    return "/movie/popular";
  };
}

export default endPoints;
