import React from "react";

import { render } from "@testing-library/react";

import Result from "../components/Result/Result";
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

describe("Result", () => {
  test("should display list of items", async () => {
    const { container, findAllByTestId } = render(
      <AuthContext.Provider value={{ data }}>
        <ThemeProvider theme={myTheme}>
          <Result />
        </ThemeProvider>
      </AuthContext.Provider>
    );
    expect(container).toMatchSnapshot();
    const children = await findAllByTestId("item");
    expect(children).toHaveLength(data.length);
  });
});
