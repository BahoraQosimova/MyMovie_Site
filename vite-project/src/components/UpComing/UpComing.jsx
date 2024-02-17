import { useEffect, useState } from "react";
import { privateApi } from "../../service/axios";
import "./upcoming.css";

const Upcoming = () => {
  const [Soon, setSoon] = useState([]);

  const newMovies = async () => {
    const movies = await privateApi.get("movie/upcoming");
    setSoon(Soon.results);
    console.log(Soon);
  };

  useEffect(() => {
    setSoon();
  }, []);

  return <div></div>;
};

export default Upcoming;
