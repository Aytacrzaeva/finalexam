import React from "react";
import Image from "../pictures/image1.png";
import SimpleAccordion from "./SimpleAccordion";
import "./Section1.scss";
const Section1 = () => {
  return (
    <div className="section1">
      <div className="container section1">
        <div className="section1__left">
          <div className="sectio1__left__img">
            <img src={Image} alt="" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo
            et, esse laudantium consequatur. Eum soluta illum architecto dolorum
            quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam
            sint repudiandae.
          </p>
          <button>Adopt a child now</button>
        </div>
        <div className="section1__right">
          <SimpleAccordion />
        </div>
      </div>
    </div>
  );
};

export default Section1;
