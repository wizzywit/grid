import { red, blue, green, yellow, cyan, grey } from "./colors";

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
