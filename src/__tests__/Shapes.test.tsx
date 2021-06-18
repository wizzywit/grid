import React from "react";

import { render } from "@testing-library/react";

import Shapes from "../components/Shapes/Shapes";
import AuthContext from "../context/AuthContext";

const shapes = ["Oval", "Traingle", "Round", "Square", "Rectangle"];

describe("Shapes", () => {
  test("should display list of colors", async () => {
    const { container, findAllByTestId } = render(
      <AuthContext.Provider value={{ shapes }}>
        <Shapes />
      </AuthContext.Provider>
    );
    expect(container).toMatchSnapshot();
    const children = await findAllByTestId("shape");
    expect(children).toHaveLength(shapes.length);
  });
});
