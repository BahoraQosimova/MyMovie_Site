import { useEffect } from "react";
import { privateApi } from "../../service/Axios";

import { useParams } from "react-router";

const SinglePage = () => {
  const { id } = useParams();
  const movieId = id.split("-")[2];
  console.log(movieId);

  const getSingle = async () => {
    const singleMovie = await privateApi.get(`account/${movieId}`);
    console.log({ singleMovie });
  };
  useEffect(() => {
    getSingle();
  }, []);

  return (
    <div className="single_container">
      <div className="Single_Banner">
        <img src={Image} alt="" />
        <h3>2024</h3>
      </div>
      <div className="single_Banner_info">
        <div className="movie_Name">Name</div>
        <p className="movie_About">About</p>
      </div>
    </div>
  );
};

export default SinglePage;
