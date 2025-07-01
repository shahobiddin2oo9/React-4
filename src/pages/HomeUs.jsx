import React, { Component } from "react";
import "../pageCss/HomePage.css";
import playIMG_1 from "../assets/home/playIMG_1.svg";
import playIMG_2 from "../assets/home/playIMG_2.svg";
import playIMG_3 from "../assets/home/playIMG_3.svg";
import playIMG_4 from "../assets/home/playIMG_4.svg";
import callOFtuty from "../assets/home/callOFtuty.svg";
import setka from "../assets/home/setka.svg";
import img_1Gr from "../assets/home/img_-1.svg";
import img_2Gr from "../assets/home/img_-2.svg";
import img_3Gr from "../assets/home/img_-2.svg";
import img_4Gr from "../assets/home/img_-4.svg";
import img_5Gr from "../assets/home/img_-5.svg";
import img_6Gr from "../assets/home/img_-6.svg";
import galary_1 from "../assets/home/projects-gallery_1.png";
import galary_2 from "../assets/home/projects-gallery_2.png";
import galary_3 from "../assets/home/projects-gallery_3.png";
import galary_4 from "../assets/home/projects-gallery_4.png";
import galary_5 from "../assets/home/projects-gallery_5.png";
import galary_6 from "../assets/home/projects-gallery_6.png";

export class HomeUs extends Component {
  render() {
    return (
      <main className="HomeMain">
        <div className="container">
          <div className="HomeBg">
            <div className="ManText">
              <div className="p">Proved By prodesigner</div>
              <h3>Work that we produce for our clients</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <button>Get more details</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="PlayCards">
            <div className="titlePlaycards">
              <p>Currently Trending Games</p>
              <button>SEE ALL</button>
            </div>
            <div className="cardsPlay">
              <div className="cardPlay">
                <img src={playIMG_1} alt="" />
                <p>40 Followers</p>
              </div>
              <div className="cardPlay">
                <img src={playIMG_2} alt="" />
                <p>40 Followers</p>
              </div>
              <div className="cardPlay">
                <img src={playIMG_3} alt="" />
                <p>40 Followers</p>
              </div>
              <div className="cardPlay">
                <img src={playIMG_4} alt="" />
                <p>40 Followers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Calltutdy">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <div className="caLLtitle">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="callIMG">
              <img className="img_1" src={callOFtuty} alt="" />
              <img className="img_2" src={setka} alt="" />
            </div>
          </div>
        </div>
        <div className="event">
          <div className="container">
            <div className="event_title">
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="eventCards">
              <div className="evntCard">
                <img src={img_1Gr} alt="" />
                <p>Mobile Game Development</p>
              </div>
              <div className="evntCard">
                <img src={img_2Gr} alt="" />
                <p>Mobile Game Development</p>
              </div>
              <div className="evntCard">
                <img src={img_3Gr} alt="" />
                <p>Mobile Game Development</p>
              </div>
              <div className="evntCard">
                <img src={img_4Gr} alt="" />
                <p>Mobile Game Development</p>
              </div>
              <div className="evntCard">
                <img src={img_5Gr} alt="" />
                <p>Mobile Game Development</p>
              </div>
              <div className="evntCard">
                <img src={img_6Gr} alt="" />
                <p>Mobile Game Development</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <section class="projects-section">
            <h2>Our Recent Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div class="projects-gallery">
              <img src={galary_1} alt="Project 1" />
              <img src={galary_2} alt="Project 1" />
              <img src={galary_3} alt="Project 1" />
              <img src={galary_4} alt="Project 1" />
              <img src={galary_5} alt="Project 1" />
              <img src={galary_6} alt="Project 1" />
            </div>
          </section>
        </div>
        <div className="footer_top">
          <div className="container">
            <button>SEE ALL</button>
          </div>
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
    );
  }
}

export default HomeUs;
