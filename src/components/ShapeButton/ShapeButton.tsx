import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Styles } from "./ShapeButton.style";

export type ShapeButtonProps = {
  text: string;
  isActive?: boolean;
};
const ShapeButton: React.FC<ShapeButtonProps> = ({ text, isActive }) => {
  const { shapesFilter, setShapesFilter, performSelect } =
    useContext(AuthContext);

  return (
    <Styles.Container
      isActive={isActive}
      onClick={() => {
        if (performSelect)
          performSelect(text, shapesFilter, setShapesFilter, "shape");
      }}
      data-testid="shape"
      data-test-active={isActive}
    >
      <p>{text}</p>
    </Styles.Container>
  );
};

export default ShapeButton;
