import React from "react";

import { render, fireEvent } from "@testing-library/react";
import AuthContext from "../context/AuthContext";

import ShapeButton, {
  ShapeButtonProps,
} from "../components/ShapeButton/ShapeButton";

function renderShapeButton(props: Partial<ShapeButtonProps> = {}) {
  const defaultProps: ShapeButtonProps = {
    text: "Triangle",
  };
  return render(<ShapeButton {...defaultProps} {...props} />);
}

describe("ColorButton", () => {
  test("should display single shape button with text", async () => {
    const { container, findByText } = renderShapeButton();
    const text = await findByText("Triangle");
    expect(text).toBeInTheDocument();
    expect(container.firstChild?.firstChild).toHaveTextContent("Triangle");
  });
  test("should display selected shape button", async () => {
    const { findByTestId } = renderShapeButton({ isActive: true });
    const shapeButton = await findByTestId("shape");
    expect(shapeButton.getAttribute("data-test-active")).toContain("true");
  });
  test("should display unselected shape button", async () => {
    const { findByTestId } = renderShapeButton({ isActive: false });
    const shapeButton = await findByTestId("shape");
    expect(shapeButton.getAttribute("data-test-active")).toContain("false");
  });
  test("should toggle selected state", async () => {
    const defaultProps: ShapeButtonProps = {
      text: "Triangle",
    };

    const performSelect = jest.fn();

    const { findByTestId } = render(
      <AuthContext.Provider value={{ performSelect }}>
        <ShapeButton {...defaultProps} />
      </AuthContext.Provider>
    );

    const shapeButton = await findByTestId("shape");
    fireEvent.click(shapeButton);
    expect(performSelect).toHaveBeenCalledTimes(1);
  });
});
