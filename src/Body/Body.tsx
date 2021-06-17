import React from "react";
import { Styles } from "./Body.style";
import Result from "../components/Result/Result";
import Shapes from "../components/Shapes/Shapes";
import Colors from "../components/Colors/Colors";

const Body = () => {
  return (
    <Styles.Container>
      <h2>Filters</h2>
      <p className="filters">Shapes</p>
      <Shapes />
      <p className="filters">Colors</p>
      <Colors />
      <div className="result">
        <h2>All oval items.</h2>
        <p>(6)</p>
      </div>
      <Result />
    </Styles.Container>
  );
};

export default Body;
