import React from "react";
import "./style.scss";
import img9 from "../../assets/img9.jpg";
import Body from "../../components/Body";

function PageSix() {
  return (
    <div className="pageSix">
      <div className="pageSix__left">
        <img alt="img9" src={img9} />
      </div>
      <div className="pageSix__right">
        <Body
          title="Yoga Training Video Showreel"
          paragrahp="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolre wu fugiate nulla pariat. Expecteur sint occaeace cupidatat"
          icons
        />
      </div>
    </div>
  );
}

export default PageSix;
