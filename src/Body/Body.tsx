import React, { useContext } from "react";
import { Styles } from "./Body.style";
import Result from "../components/Result/Result";
import Shapes from "../components/Shapes/Shapes";
import Colors from "../components/Colors/Colors";
import AuthContext from "../context/AuthContext";
import { gridTitle } from "../helper";

const Body = () => {
  const { colorsFilter, shapesFilter, data } = useContext(AuthContext);
  const title =
    colorsFilter && shapesFilter ? gridTitle(colorsFilter, shapesFilter) : "";
  return (
    <Styles.Container>
      <h2 data-testid="title">Filters</h2>
      <p className="filters" data-testid="shape-title">
        Shapes
      </p>
      <Shapes />
      <p className="filters" data-testid="color-title">
        Colors
      </p>
      <Colors />
      <div className="result">
        <h2>{title}</h2>
        <p>({data?.length})</p>
      </div>
      <Result />
    </Styles.Container>
  );
};

export default Body;
