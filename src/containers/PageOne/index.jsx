import React from "react";
import Header from "../../components/Header";
import img1 from "../../assets/img1.png";
import "./style.scss";
import Body from "../../components/Body";

function PageOne() {
  return (
    <div className="pageOne">
      <Header />
      <div className="pageOne__container">
        <img
          className="pageOne__containerLeft"
          src={img1}
          alt="pageone-photo"
        />
        <div className="pageOne__containerRight">
          <Body
            title="Balance Your Body and Mind"
            paragrahp="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolre wu fugiate nulla pariat. Expecteur sint occaeace cupidatat"
            btnTitle="JOIN US NOW"
          />
        </div>
      </div>
    </div>
  );
}

export default PageOne;
