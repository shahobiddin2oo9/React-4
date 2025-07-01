import React, { Component } from "react";
import "../pageCss/Contact.css";
import map from "../assets/Contact/map.svg";
export class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className="map container">
          <div className="title">
            <h2>
              <a href="/">Home</a> &gt; Contact us
            </h2>
            <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <img src={map} alt="" />
          </div>
          <footer class="footer">
            <div class="footer-section">
              <p>Follow us</p>
              <div class="social-icons">
                <a href="#/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div class="footer-divider"></div>

            <div class="footer-section">
              <i class="fas fa-phone-alt"></i>
              <span>+94 4444 5555 6</span>
            </div>

            <div class="footer-divider"></div>

            <div class="footer-section">
              <i class="fas fa-map-marker-alt"></i>
              <span>but also the leap into electronic typesetting</span>
            </div>
          </footer>
          <section class="contact-section">
            <div class="contact-container">
              <h2>Say hello</h2>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>

              <form class="contact-form">
                <div class="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Message" rows="6" required></textarea>
                <button type="submit">Get in touch</button>
              </form>
            </div>
          </section>
          <div className="footer_top">
            <div className="container">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <div className="card">
                <div className="card-1">
                  <h3>Stay in the loop</h3>
                  <h6>
                    Subscribe to receive the latest news and updates about TDA.
                  </h6>
                </div>
                <div className="card-2">
                  <input type="text" placeholder="Enter email address" />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
