import React, { Component } from "react";
import found from "../assets/home/NotFound.jpg";
export class NotfounPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <a className="a_found" href="./">
            Home
          </a>
        </div>
        <img className="NotFound" src={found} alt="" />
      </div>
    );
  }
}

export default NotfounPage;
