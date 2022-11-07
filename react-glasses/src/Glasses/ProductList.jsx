import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const { data, changeGlass } = this.props;

    return (
      <div className="col-6 mt-3">
        <img
          style={{
            width: "100%",
          }}
          src={data.url}
          alt="..."
          onClick={() => {
            changeGlass(data);
          }}
        />
      </div>
    );
  }
}
