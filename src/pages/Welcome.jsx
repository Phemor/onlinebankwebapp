import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NavigationButtons from "../components/NavigationButtons";
import BackgroundSlider from "../components/BackgroundSlider";

function Welcome() {
  return (
    <div>
      <NavigationButtons />
      <div className="welcomecontainer">
        <h1>Welcome To GCT Bank</h1>
        <Link to="/payment">
          <button className="button">Pay</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
