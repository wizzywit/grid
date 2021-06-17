import React from "react";
import { red } from "../colors";

import { getColor, getColorName, performSelect } from "../helper";

describe("helpers", () => {
  test("should toggle states of filters passed", async () => {
    const filter = jest.fn();
    performSelect("red", ["red", "blue", "green", "yellow"], filter, "color");
    expect(filter).toHaveBeenCalledTimes(1);
  });
  test("should get approipraite color in hex based on what is passed", async () => {
    const color = getColor("red");
    expect(color).toEqual(red);
  });
  test("should get approipraite color name based on hex value passed", async () => {
    const color = getColorName(red);
    expect(color).toEqual("red");
  });
});
