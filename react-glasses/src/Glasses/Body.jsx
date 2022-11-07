import React, { Component } from "react";
import ProductList from "./ProductList";

const model = "./glassesImage/model.jpg";

const arrList = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class Body extends Component {
  state = {
    glasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlass = (click) => {
    this.setState({
      glasses: click,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <div className="row">
              {arrList.map((item, index) => {
                return (
                  <ProductList
                    data={item}
                    key={index}
                    changeGlass={this.changeGlass}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-6 model--right">
            <img className="glasses__model" src={model} alt="..." />
            <img
              className="glasses__image"
              src={this.state.glasses.url}
              alt=""
            />
            <div className="glasses__info">
              <h3 className="glasses__name">{this.state.glasses.name}</h3>
              <p className="glasses__descrip">{this.state.glasses.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
