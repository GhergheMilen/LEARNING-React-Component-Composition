import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Great!"]}
    ></StarRating>
    <StarRating maxRating={5} color="red" size={24} className="test"></StarRating>
    <StarRating maxRating={5} color="green" size={16} defaultRating={3}></StarRating>
  </React.StrictMode>
);
