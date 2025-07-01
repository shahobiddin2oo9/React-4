import React, { Component } from "react";
import gif from "./oJBOT4S.gif";
export class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img className="gif" src={gif} alt="" />
      </div>
    );
  }
}

export default Loading;
