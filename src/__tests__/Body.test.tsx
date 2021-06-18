import React from "react";

import { render } from "@testing-library/react";

import Body from "../Body/Body";
import AuthContext from "../context/AuthContext";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../theme";

const data = [
  { shape: "oval", color: "red" },
  { shape: "traingle", color: "grey" },
  { shape: "round", color: "blue" },
  { shape: "square", color: "green" },
  { shape: "rectangle", color: "grey" },
];

describe("Body", () => {
  test("should display body containing filters and results", async () => {
    const { container, findAllByTestId, findByTestId } = render(
      <AuthContext.Provider value={{ data }}>
        <ThemeProvider theme={myTheme}>
          <Body />
        </ThemeProvider>
      </AuthContext.Provider>
    );
    expect(container).toMatchSnapshot();
    const children = await findAllByTestId("item");
    const title = await findByTestId("title");
    const colorsTitle = await findByTestId("color-title");
    const shapesTitle = await findByTestId("shape-title");

    expect(title).toHaveTextContent("Filters");
    expect(shapesTitle).toHaveTextContent("Shapes");
    expect(colorsTitle).toHaveTextContent("Colors");
    expect(children).toHaveLength(data.length);
  });
});
