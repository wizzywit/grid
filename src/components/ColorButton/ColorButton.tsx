import React from "react";
import { Styles } from "./ColorButton.style";

type ColorButtonProps = {
  color: string;
  isActive?: boolean;
};
const ColorButton: React.FC<ColorButtonProps> = ({ color, isActive }) => {
  return (
    <Styles.Container isActive={isActive} color={color}></Styles.Container>
  );
};

export default ColorButton;
