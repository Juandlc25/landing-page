import React from "react";
import "./style.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "../Btn";

function Body({ title, paragrahp, btnTitle, icons }) {
  return (
    <div className="body">
      <h1>{title}</h1>
      <p>{paragrahp}</p>
      <Button title={btnTitle} />
      {icons && (
        <div className="iconsDiv">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
