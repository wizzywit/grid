import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { getColorName } from "../../helper";
import { Styles } from "./ColorButton.style";

type ColorButtonProps = {
  color: string;
  isActive?: boolean;
};
const ColorButton: React.FC<ColorButtonProps> = ({ color, isActive }) => {
  const { colorsFilter, setColorsFilter } = useContext(AuthContext);

  const performSelect = (color: string) => {
    if (colorsFilter?.includes(color)) {
      const newArr = colorsFilter?.filter((el) => el !== color);
      if (newArr.length === 0) {
        if (setColorsFilter)
          setColorsFilter(["red", "blue", "green", "yellow", "cyan", "grey"]);
      } else {
        if (setColorsFilter) setColorsFilter(newArr);
      }
    } else {
      if (setColorsFilter) setColorsFilter((prev) => [...prev, color]);
    }
  };

  return (
    <Styles.Container
      isActive={isActive}
      color={color}
      onClick={() => performSelect(getColorName(color))}
    ></Styles.Container>
  );
};

export default ColorButton;
