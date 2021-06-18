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

export const gridTitle = (
  colors: Array<string>,
  shapes: Array<string>
): string => {
  if (colors.length === 6 && shapes.length === 5) return "All items";
  else if (shapes.length === 5 && colors.length === 1)
    return `All ${colors[0]} items.`;
  else if (colors.length === 6 && shapes.length === 1)
    return `All ${shapes[0]} items.`;
  else if (shapes.length > 1 && colors.length === 1)
    return `Multiple ${colors[0]} items.`;
  else if (colors.length > 1 && shapes.length === 1)
    return `Multiple ${shapes[0]} items.`;
  else if (shapes.length === 1 && colors.length === 1)
    return `${toProperCase(shapes[0])} ${colors[0]} items.`;
  else return "Multiple items.";
};

export const toProperCase = function (s: string): string {
  return s.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
