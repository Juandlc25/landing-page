import React from "react";
import Btn from "../../components/Btn";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import "./style.scss";

function PageSeven() {
  return (
    <div className="pageSeven">
      <Title
        margin
        title="Get in Touch"
        para="Neque laorett suspendisee intedum consectetur libero id faucibus nisl
        tincidunt. Dictum fusce ut placerat orci nulla pellentesque difnissm
        enim sit"
      />
      <input type="text" placeholder="Your name" />
      <input type="text" placeholder="Gender" />
      <textarea placeholder="Messages" />
      <Btn title="SEND MESSAGE" />
      <Footer />
    </div>
  );
}

export default PageSeven;
