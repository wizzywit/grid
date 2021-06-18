import React from "react";
import { red } from "../colors";

import { getColor, getColorName, gridTitle, performSelect } from "../helper";

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
  test("should display approipraite grid title", async () => {
    const single = gridTitle(["green"], ["oval"]);
    const ovalItems = gridTitle(["green", "red", "blue"], ["oval"]);
    const allOvalItems = gridTitle(
      ["blue", "green", "red", "grey", "cyan", "yellow"],
      ["oval"]
    );
    const redItems = gridTitle(["red"], ["oval", "traingle", "rectangle"]);
    const allRedItems = gridTitle(
      ["red"],
      ["oval", "traingle", "round", "square", "rectangle"]
    );
    expect(single).toEqual("Oval green items.");
    expect(ovalItems).toEqual("Multiple oval items.");
    expect(allOvalItems).toEqual("All oval items.");
    expect(redItems).toEqual("Multiple red items.");
    expect(allRedItems).toEqual("All red items.");
  });
});
