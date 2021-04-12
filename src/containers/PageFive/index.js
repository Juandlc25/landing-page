import React from "react";
import "./style.scss";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import Title from "../../components/Title";

function PageFive() {
  return (
    <div className="pageFive">
      <Title
        title="Galery"
        para="Neque laorett suspendisee intedum consectetur libero id faucibus nisl
        tincidunt. Dictum fusce ut placerat orci nulla pellentesque difnissm
        enim sit"
      />
      <div className="pageFive__items">
        <Items
          img={img6}
          title="Facilis Gravidia"
          para="A lacus vestibulum sed. Amet purus gravida quis blanquit turquis"
        />
        <Items
          img={img7}
          title="Facilis Gravidia"
          para="A lacus vestibulum sed. Amet purus gravida quis blanquit turquis"
        />
        <Items
          img={img8}
          title="Facilis Gravidia"
          para="A lacus vestibulum sed. Amet purus gravida quis blanquit turquis"
        />
      </div>
    </div>
  );
}

// components

const Items = ({ img, para, title }) => {
  return (
    <div className="items">
      <img alt="" src={img} />
      <h2>{title}</h2>
      <span>{para}</span>
    </div>
  );
};

export default PageFive;
