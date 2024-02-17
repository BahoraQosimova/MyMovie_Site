import React from "react";
import ReactLoading from "react-loading";
import "./loading.css";
const Loading = ({ type = "spinningBubbles", color = "blue" }) => {
  return (
    <div className="myLoading">
      <ReactLoading type={type} color={color} height={667} width={375} />
    </div>
  );
};

export default Loading;
