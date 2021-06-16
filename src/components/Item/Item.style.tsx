import styled from "styled-components";
import { red, blue, green, yellow, cyan, grey } from "../../colors";
interface ItemProps {
  color: string;
}

const getColor = (color: string): string => {
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

export const Styles = {
  Container: styled.div<ItemProps>`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 250px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 5px rgba(235, 240, 248, 0.75);

    .oval {
      width: 70px;
      height: 100px;
      border-radius: 50%;
      background-color: ${({ color }) => getColor(color)};
    }

    .traingle {
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid ${({ color }) => getColor(color)};
    }

    .rectangle {
      width: 150px;
      height: 100px;
      background-color: ${({ color }) => getColor(color)};
    }

    .square {
      width: 100px;
      height: 100px;
      background-color: ${({ color }) => getColor(color)};
    }

    .round {
      width: 100px;
      height: 100px;
      background-color: ${({ color }) => getColor(color)};
      border-radius: 50%;
    }
  `,
};
