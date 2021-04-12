import React from "react";
import Body from "../../components/Body";
import "./style.scss";
import img3 from "../../assets/img3.png";

function PageThree() {
  const programs = [
    {
      img: "Screenshot_28.png",
      title: "Program 1",
      para: "sont occaecat cupidat non",
    },
    {
      img: "Screenshot_29.png",
      title: "Program 2",
      para: "sont occaecat cupidat non",
    },
    {
      img: "Screenshot_30.png",
      title: "Program 3",
      para: "sont occaecat cupidat non",
    },
  ];
  return (
    <div className="pageThree">
      <div className="pageThree-1">
        {programs.map((program) => (
          <Program
            img={program.img}
            title={program.title}
            para={program.para}
          />
        ))}
      </div>
      <div className="pageThree-2">
        <div className="pageThree__left">
          <Body
            title="Yoga Breathing or Pranayama"
            paragrahp="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolre wu fugiate nulla pariat. Expecteur sint occaeace cupidatat"
            btnTitle="LEARN MORE"
          />
        </div>
        <div className="pageThree__right">
          <img alt="img3" src={img3} />
        </div>
      </div>
    </div>
  );
}

// components

const Program = ({ img, para, title }) => {
  return (
    <div className="program">
      <img alt={img} src={process.env.PUBLIC_URL + `/img/${img}`} />
      <h4>{title}</h4>
      <p>{para}</p>
    </div>
  );
};

export default PageThree;
