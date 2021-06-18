import React from "react";

import { render } from "@testing-library/react";

import Item, { ItemProps } from "../components/Item/Item";
import { red } from "../colors";
import { myTheme } from "../theme";
import { ThemeProvider } from "styled-components";

describe("Item", () => {
  test("should display an item list", async () => {
    const defaultProps: ItemProps = {
      color: red,
      shape: "rectangle",
    };

    const { findByTestId } = render(
      <ThemeProvider theme={myTheme}>
        <Item {...defaultProps} />
      </ThemeProvider>
    );
    const item = await findByTestId("item");
    const shape = await findByTestId("shape");
    expect(item).toHaveAttribute("color", defaultProps.color);
    expect(shape).toHaveAttribute("data-shape", defaultProps.shape);
  });
});
