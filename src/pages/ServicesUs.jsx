import React, { Component } from "react";
import "../pageCss/Services.css";
import icon_1 from "../assets/Services/icon_1.svg";
import icon_2 from "../assets/Services/icon_2.png";
import icon_3 from "../assets/Services/icon_3.png";
import done from "../assets/Services/done.png";
import FireMan from "../assets/Services/Hero Video.png";
import TemurMan from "../assets/Services/TemurMan.png";
import HorseMan from "../assets/Services/horseman.svg";
import sdasd from "../assets/Services/dsdad.png";

export class ServicesUs extends Component {
  render() {
    return (
      <div className="Services--Content">
        <div className="container">
          <div className="title">
            <h2>
              <a href="/">Home</a> &gt; News us
            </h2>
            <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="CardPeople">
            <div className="onePage">
              <img src={icon_1} alt="" />
              <div className="title">
                <h3>
                  90+
                  <br />
                  <span>Clients</span>
                </h3>
              </div>
            </div>
            <div className="onePage">
              <img src={icon_2} alt="" />
              <div className="title">
                <h3>
                  30+
                  <br />
                  <span>Countries</span>
                </h3>
              </div>
            </div>
            <div className="onePage">
              <img src={icon_3} alt="" />
              <div className="title">
                <h3>
                  50+
                  <br />
                  <span>Projects</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="fireMan">
              <img className="FireMan" src={FireMan} alt="" />
              <div className="text">
                <h4>Lorem Ipsum is simply dummy text.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy .
                </p>
                <div className="DonePag">
                  <div className="done">
                    <img src={done} alt="" />
                    <span>Lorem Ipsum is simply</span>
                  </div>
                  <div className="done">
                    <img src={done} alt="" />
                    <span>Lorem Ipsum is simply</span>
                  </div>
                  <div className="done">
                    <img src={done} alt="" />
                    <span>Lorem Ipsum is simply</span>
                  </div>
                  <div className="done">
                    <img src={done} alt="" />
                    <span>Lorem Ipsum is simply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="fireMan">
              <div className="text">
                <h4>Lorem Ipsum is simply dummy text dummy text </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button
                  style={{
                    backgroundColor: "#D80027",
                    color: "white",
                    borderRadius: "2px",
                    padding: "13px 44px",
                    margin: "10px 0px",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  Read more
                </button>
              </div>
              <img className="TemurMan" src={TemurMan} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="fireMan">
              <img className="TemurMan" src={HorseMan} alt="" />

              <div className="text">
                <h4>Lorem Ipsum is simply dummy text dummy text </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button
                  style={{
                    backgroundColor: "#D80027",
                    color: "white",
                    borderRadius: "2px",
                    padding: "13px 44px",
                    margin: "10px 0px",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="fireMan">
              <div className="text">
                <h4>Lorem Ipsum is simply dummy text dummy text </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button
                  style={{
                    backgroundColor: "#D80027",
                    color: "white",
                    borderRadius: "2px",
                    padding: "13px 44px",
                    margin: "10px 0px",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  Read more
                </button>
              </div>
              <img className="TemurMan" src={sdasd} alt="" />
            </div>
          </div>
        </section>
        <div class="testimonials-section">
          <div className="container">
            <h3>Trusted by Thousands of Happy Customer</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy .
            </p>
            <div class="testimonials-grid">
              <div class="testimonial-card">
                <div class="rating">
                  <img src={icon_1} alt="" />
                  <div>
                    ★★★★☆ <span>4.5</span>
                  </div>
                </div>
                <p class="testimonial-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="customer-info">
                  <div class="customer-name">Yessica Christy</div>
                  <div class="customer-location">Shanxi, China</div>
                </div>
              </div>

              <div class="testimonial-card">
                <div class="rating">
                  <img src={icon_1} alt="" />
                  <div>
                    ★★★★☆ <span>4.5</span>
                  </div>
                </div>
                <p class="testimonial-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="customer-info">
                  <div class="customer-name">Yessica Christy</div>
                  <div class="customer-location">Shanxi, China</div>
                </div>
              </div>

              <div class="testimonial-card">
                <div class="rating">
                  <img src={icon_1} alt="" />
                  <div>
                    ★★★★☆ <span>4.5</span>
                  </div>
                </div>
                <p class="testimonial-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div class="customer-info">
                  <div class="customer-name">Kim Young Jou</div>
                  <div class="customer-location">Seoul, South Korea</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer_top">
            <div className="container">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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

export default ServicesUs;
