import { red, blue, green, yellow, cyan, grey } from "./colors";
import { Filter } from "./context/AuthContext";

export const getColor = (color: string): string => {
  switch (color) {
    case "red":
      return red;
    case "blue":
      return blue;
    case "green":
      return green;
    case "yellow":
      return yellow;
    case "cyan":
      return cyan;
    case "grey":
      return grey;
    default:
      return "white";
  }
};
export const getColorName = (color: string): string => {
  switch (color) {
    case red:
      return "red";
    case blue:
      return "blue";
    case green:
      return "green";
    case yellow:
      return "yellow";
    case cyan:
      return "cyan";
    case grey:
      return "grey";
    default:
      return "white";
  }
};

export const performSelect = (
  shape: string,
  shapesFilter: Array<string> | undefined,
  filter: Filter | undefined,
  type: string
) => {
  shape = shape.toLowerCase();
  if (shapesFilter?.includes(shape)) {
    const newArr = shapesFilter?.filter((el) => el !== shape);
    if (newArr.length === 0) {
      if (filter)
        switch (type) {
          case "shape":
            filter(["oval", "traingle", "round", "square", "rectangle"]);
            break;
          case "color":
            filter(["red", "blue", "green", "yellow", "cyan", "grey"]);
            break;
          default:
            break;
        }
    } else {
      if (filter) filter(newArr);
    }
  } else {
    if (filter) filter((prev) => [...prev, shape]);
  }
};
