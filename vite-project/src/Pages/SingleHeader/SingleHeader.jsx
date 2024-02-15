import { useEffect, useState } from "react";
import { imageW500 } from "../../utils/imgURL";
import { Movie } from "../../service/serviceApi";
const [error, setError] = useState(null);
const [singleData, setSingleData] = useState(null);
useEffect(() => {
  const handlegetSingle = async () => {
    setLoading(true);
    const { response, error } = await new Movie().getSingle(movieID);
    if (response) {
      setLoading(false);
      setSingleData(response);
    }
    setLoading(false);
    setError(error);
  };
  handlegetSingle();
}, [movieID]);

const SingleHeader = () => {
  return (
    <div className="single_header">
      <div className="slide_content">
        <h1>
          {singleData?.original_title}
          <span className="text_opacity">({year.getFullYear()})</span>
        </h1>
      </div>
      <div>
        <div
          className="single_image"
          style={{
            background:
              "linear-gradient(to right,transparent,#0c0c0c),url(${imageW500(singleData?.backdrop_path)}), no-repeat center top",
          }}
        ></div>
        <h1 style={{ color: "#fff" }}>{singleData?.title}</h1>
        <h1 style={{ color: "#fff" }}>{error?.status_massage}</h1>
      </div>
    </div>
  );
};
export default SingleHeader;
