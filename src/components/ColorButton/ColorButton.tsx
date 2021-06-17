import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { getColorName, performSelect } from "../../helper";
import { Styles } from "./ColorButton.style";

type ColorButtonProps = {
  color: string;
  isActive?: boolean;
};
const ColorButton: React.FC<ColorButtonProps> = ({ color, isActive }) => {
  const { colorsFilter, setColorsFilter } = useContext(AuthContext);

  return (
    <Styles.Container
      isActive={isActive}
      color={color}
      onClick={() =>
        performSelect(
          getColorName(color),
          colorsFilter,
          setColorsFilter,
          "color"
        )
      }
    ></Styles.Container>
  );
};

export default ColorButton;
