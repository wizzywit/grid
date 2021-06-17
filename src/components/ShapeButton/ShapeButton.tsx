import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Styles } from "./ShapeButton.style";

type ShapeButtonProps = {
  text: string;
  isActive?: boolean;
};
const ShapeButton: React.FC<ShapeButtonProps> = ({ text, isActive }) => {
  const { shapesFilter, setShapesFilter } = useContext(AuthContext);
  const performSelect = (shape: string) => {
    shape = shape.toLowerCase();
    if (shapesFilter?.includes(shape)) {
      const newArr = shapesFilter?.filter((el) => el !== shape);
      if (newArr.length === 0) {
        if (setShapesFilter)
          setShapesFilter(["oval", "traingle", "round", "square", "rectangle"]);
      } else {
        if (setShapesFilter) setShapesFilter(newArr);
      }
    } else {
      if (setShapesFilter) setShapesFilter((prev) => [...prev, shape]);
    }
  };
  return (
    <Styles.Container isActive={isActive} onClick={() => performSelect(text)}>
      <p>{text}</p>
    </Styles.Container>
  );
};

export default ShapeButton;
