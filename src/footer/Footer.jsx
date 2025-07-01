import React, { Component } from "react";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section logo-section">
            <h3>LOGO</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span>@Lorem</span>
          </div>

          <div className="footer-section links-section">
            <h4>About us</h4>
            <ul>
              <li>
                <a href="#">Zeux</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact-section">
            <h4>Contact us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>+908 89097 890</p>
            <div className="social-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2022 prodesigner All rights Reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
