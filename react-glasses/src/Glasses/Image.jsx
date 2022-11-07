import React, { Component } from "react";

export default class Image extends Component {
  render() {
    const { data, changeGlass } = this.props;
    return (
      <div className="col-3">
        <img
          src={data.url}
          alt="..."
          onClick={() => {
            changeGlass();
          }}
        />
      </div>
    );
  }
}
