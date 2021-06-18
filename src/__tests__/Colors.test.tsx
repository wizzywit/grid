import React from "react";

import { render } from "@testing-library/react";

import Colors from "../components/Colors/Colors";
import AuthContext from "../context/AuthContext";
import { red, blue, green, yellow, cyan, grey } from "../colors";

const colors = [red, blue, green, yellow, cyan, grey];

describe("Color", () => {
  test("should display list of colors", async () => {
    const { container, findAllByTestId } = render(
      <AuthContext.Provider value={{ colors }}>
        <Colors />
      </AuthContext.Provider>
    );
    expect(container).toMatchSnapshot();
    const children = await findAllByTestId("color");
    expect(children).toHaveLength(colors.length);
  });
});
