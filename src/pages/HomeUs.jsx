import React, { Component } from "react";
import "../pageCss/HomePage.css";

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
        <div className="PlayCards">
          <div className="titlePlaycards">
            <p>Currently Trending Games</p>
            <button>SEE ALL</button>
          </div>
        </div>
      </main>
    );
  }
}

export default HomeUs;
