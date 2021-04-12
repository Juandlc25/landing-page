import React from "react";
import Body from "../../components/Body";
import "./style.scss";

function PageFour() {
  return (
    <div className="pageFour">
      <div className="pageFour__left"></div>
      <div className="pageFour__right">
        <Body
          title="Join Now and Get 50% Off"
          paragrahp="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolre wu fugiate nulla pariat. Expecteur sint occaeace cupidatat"
          btnTitle="JOIN US NOW"
        />
      </div>
    </div>
  );
}

export default PageFour;
