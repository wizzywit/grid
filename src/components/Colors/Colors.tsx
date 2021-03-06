import React, { useContext } from "react";
import { Styles } from "./Colors.style";
import ColorButton from "../ColorButton/ColorButton";
import AuthContext from "../../context/AuthContext";
import { getColorName } from "../../helper";

const Colors = () => {
  const { colorsFilter, colors } = useContext(AuthContext);
  return (
    <Styles.ColorsContainer>
      {colors?.map((color) => (
        <ColorButton
          key={color}
          color={color}
          isActive={colorsFilter?.includes(getColorName(color))}
        />
      ))}
    </Styles.ColorsContainer>
  );
};

export default Colors;
