import React from "react";
import ColorButton from "../components/ColorButton/ColorButton";
import ShapeButton from "../components/ShapeButton/ShapeButton";
import { Styles } from "./Body.style";
import { red, blue, green, yellow, cyan, grey } from "../colors";
import Item from "../components/Item/Item";

const colors = [
  { id: red, isActive: true },
  { id: blue, isActive: true },
  { id: green, isActive: true },
  { id: yellow, isActive: true },
  { id: cyan, isActive: true },
  { id: grey, isActive: true },
];

const shapes = [
  { id: "Oval", isActive: true },
  { id: "Traingle", isActive: false },
  { id: "Round", isActive: false },
  { id: "Square", isActive: false },
  { id: "Rectangle", isActive: false },
];

const Body = () => {
  return (
    <Styles.Container>
      <h2>Filters</h2>
      <p className="filters">Shapes</p>
      <Styles.ShapesContainer>
        {shapes.map((shape) => (
          <ShapeButton
            key={shape.id}
            text={shape.id}
            isActive={shape.isActive}
          />
        ))}
      </Styles.ShapesContainer>
      <p className="filters">Colors</p>
      <Styles.ShapesContainer>
        {colors.map((color) => (
          <ColorButton
            key={color.id}
            color={color.id}
            isActive={color.isActive}
          />
        ))}
      </Styles.ShapesContainer>
      <div className="result">
        <h2>All oval items.</h2>
        <p>(6)</p>
      </div>
      <Styles.ResultContainer>
        <Item shape="oval" color="red" />
        <Item shape="oval" color="blue" />
        <Item shape="oval" color="green" />
        <Item shape="oval" color="yellow" />
        <Item shape="oval" color="cyan" />
        <Item shape="oval" color="grey" />
      </Styles.ResultContainer>
    </Styles.Container>
  );
};

export default Body;
