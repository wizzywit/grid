import React, { useContext } from "react";
import { Styles } from "./Body.style";
import Result from "../components/Result/Result";
import Shapes from "../components/Shapes/Shapes";
import Colors from "../components/Colors/Colors";
import AuthContext from "../context/AuthContext";

const gridTitle = (colors: Array<string>, shapes: Array<string>): string => {
  if (colors.length === 6 && shapes.length === 5) return "All items";
  else if (
    (colors.length === 6 && shapes.length > 1) ||
    (shapes.length === 5 && colors.length > 1)
  )
    return "Multiple items.";
  else if (shapes.length === 5 && colors.length === 1)
    return `All ${colors[0]} items.`;
  else if (colors.length === 6 && shapes.length === 1)
    return `All ${shapes[0]} items.`;
  else if (shapes.length > 1 && colors.length === 1)
    return `Multiple ${colors[0]} items.`;
  else if (colors.length > 1 && shapes.length === 1)
    return `Multiple ${shapes[0]} items.`;
  else return `${toProperCase(shapes[0])} ${colors[0]} items.`;
};

const toProperCase = function (s: string): string {
  return s.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Body = () => {
  const { colorsFilter, shapesFilter, data } = useContext(AuthContext);
  const title =
    colorsFilter && shapesFilter ? gridTitle(colorsFilter, shapesFilter) : "";
  return (
    <Styles.Container>
      <h2>Filters</h2>
      <p className="filters">Shapes</p>
      <Shapes />
      <p className="filters">Colors</p>
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
