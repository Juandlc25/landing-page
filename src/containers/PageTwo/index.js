import React from "react";
import Body from "../../components/Body";
import "./style.scss";

function PageTwo() {
  return (
    <div className="pageTwo">
      <div className="pageTwo__left">
        <Body
          title="Pregnant Women Program"
          paragrahp="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolre wu fugiate nulla pariat. Expecteur sint occaeace cupidatat"
          btnTitle="JOIN US NOW"
        />
      </div>
      <div className="pageTwo__right"></div>
    </div>
  );
}

export default PageTwo;
