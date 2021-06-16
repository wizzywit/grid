import React from "react";
import { Styles } from "./ShapeButton.style";

type ShapeButtonProps = {
  text: string;
  isActive?: boolean;
};
const ShapeButton: React.FC<ShapeButtonProps> = ({ text, isActive }) => {
  return (
    <Styles.Container isActive={isActive}>
      <p>{text}</p>
    </Styles.Container>
  );
};

export default ShapeButton;
