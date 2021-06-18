import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { getColorName } from "../../helper";
import { Styles } from "./ColorButton.style";

export type ColorButtonProps = {
  color: string;
  isActive?: boolean;
};
const ColorButton: React.FC<ColorButtonProps> = ({ color, isActive }) => {
  const { colorsFilter, setColorsFilter, performSelect } =
    useContext(AuthContext);

  return (
    <Styles.Container
      isActive={isActive}
      data-testid="color"
      data-test-active={isActive}
      color={color}
      onClick={() => {
        if (performSelect)
          performSelect(
            getColorName(color),
            colorsFilter,
            setColorsFilter,
            "color"
          );
      }}
    ></Styles.Container>
  );
};

export default ColorButton;
