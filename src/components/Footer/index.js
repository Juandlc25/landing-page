import React from "react";
import "./style.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import footerImg from "../../assets/Screenshot_3.png";

function Footer() {
  return (
    <div className="footer">
      <div style={{ marginLeft: "130px" }}>
        <h3 style={{ marginBottom: "20px" }}>Your Company</h3>
        <p>Halimun Street 25</p>
        <p>Jakarta, Indonesia</p>
        <p>12850</p>
        <p style={{ marginTop: "20px" }}>www.yourdomain.com</p>
      </div>
      <div>
        <h4>Sitemap</h4>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Menu</p>
        <p>Store</p>
        <p>Contact</p>
      </div>
      <div>
        <h4>Lorem Ipsum</h4>
        <p>Neque</p>
        <p>Suspendise</p>
        <p>Dictum</p>
        <p>Porttitor</p>
        <p>Tincidunt</p>
        <p>Enim lobortis</p>
      </div>
      <div>
        <h4>Sit Amet</h4>
        <p>Neque</p>
        <p>Suspendise</p>
        <p>Dictum</p>
        <p>Porttitor</p>
        <p>Tincidunt</p>
        <p>Enim lobortis</p>
      </div>
      <div style={{ marginRight: "130px" }}>
        <img alt="" src={footerImg} />
        <p>Copyright © 2020 Freepik</p>
        <p style={{ marginBottom: "50px" }}>Company S.L All rights reserved.</p>
        <div className="icons">
          <div>
            <FacebookIcon fontSize="small" />
          </div>
          <div>
            <InstagramIcon fontSize="small" />
          </div>
          <div>
            <TwitterIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
