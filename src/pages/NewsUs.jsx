import React, { Component } from "react";
import "../pageCss/News.css";
import { drkMovies, kinMovies } from "../assets/News";
import NewsCard from "../data/data_1";
export class NewsUs extends Component {
  render() {
    return (
      <div className="container">
        <main className="main-content">
          <div className="title">
            <h2>
              <a href="/">Home</a> &gt; News us
            </h2>
            <h3>Lorem Ipsum is simply dummy text of the printing and.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="input">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="TwoSection">
            <div className="SectionOne">
              <div className="cards">
                <div className="card">
                  <div className="card--body">
                    <img src={kinMovies} alt="" />
                  </div>
                  <div className="card--footer">
                    <div className="btn">
                      <button>John smash</button>
                      <span>.5min</span>
                    </div>
                    <h5>Lorem Ipsum is simply dummy text dummy text </h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries,
                      <br />
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="card">
                  <div className="card--body">
                    <img src={drkMovies} alt="" />
                  </div>
                  <div className="card--footer">
                    <div className="btn">
                      <button>John smash</button>
                      <span>.5min</span>
                    </div>
                    <h5>Lorem Ipsum is simply dummy text dummy text </h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries,
                      <br />
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="SectionTwo">
              <div className="cards">
                {NewsCard.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="card--img">
                      <img src={item.img} alt="news" />
                    </div>
                    <div className="card--title">
                      <div className="btn">
                        <button>{item.btn}</button>
                        <span>{item.span}</span>
                      </div>
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
        </main>
      </div>
    );
  }
}

export default NewsUs;
