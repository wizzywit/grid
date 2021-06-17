import React, { useContext } from "react";
import { Styles } from "./Shapes.style";
import ShapeButton from "../ShapeButton/ShapeButton";
import AuthContext from "../../context/AuthContext";

const shapes = ["Oval", "Traingle", "Round", "Square", "Rectangle"];
const Shapes = () => {
  const { shapesFilter } = useContext(AuthContext);

  return (
    <Styles.ShapesContainer>
      {shapes.map((shape) => (
        <ShapeButton
          key={shape}
          text={shape}
          isActive={shapesFilter?.includes(shape.toLowerCase())}
        />
      ))}
    </Styles.ShapesContainer>
  );
};

export default Shapes;
