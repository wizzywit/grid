import React from "react";
import ShapeButton from "../components/ShapeButton/ShapeButton";
import { Styles } from "./Body.style";

const Body = () => {
  return (
    <Styles.Container>
      <h2>Filters</h2>
      <p className="filters">Shapes</p>
      <Styles.ShapesContainer>
        <ShapeButton text="Oval" isActive />
        <ShapeButton text="Traingle" />
        <ShapeButton text="Round" />
        <ShapeButton text="Square" />
        <ShapeButton text="Rectangle" />
      </Styles.ShapesContainer>
      <p className="filters">Colors</p>
    </Styles.Container>
  );
};

export default Body;
