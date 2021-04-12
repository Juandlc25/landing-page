import React from "react";
import "./style.scss";

function Title({ title, para, margin }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p className="para">{para}</p>
    </>
  );
}

export default Title;
