import React from "react";

import { render, fireEvent } from "@testing-library/react";
import AuthContext from "../context/AuthContext";

import ColorButton, {
  ColorButtonProps,
} from "../components/ColorButton/ColorButton";
import { red } from "../colors";

function renderColorButton(props: Partial<ColorButtonProps> = {}) {
  const defaultProps: ColorButtonProps = {
    color: red,
  };
  return render(<ColorButton {...defaultProps} {...props} />);
}

describe("ColorButton", () => {
  test("should display single color button", async () => {
    const { findByTestId } = renderColorButton();
    const colorButton = await findByTestId("color");
    expect(colorButton).toHaveAttribute("color", red);
  });
  test("should display selected color button", async () => {
    const { findByTestId } = renderColorButton({ isActive: true });
    const colorButton = await findByTestId("color");
    expect(colorButton).toHaveAttribute("data-test-active", "true");
  });
  test("should display unselected color button", async () => {
    const { findByTestId } = renderColorButton({ isActive: false });
    const colorButton = await findByTestId("color");
    expect(colorButton).toHaveAttribute("data-test-active", "false");
  });
  test("should toggle selected state", async () => {
    const defaultProps: ColorButtonProps = {
      color: red,
    };

    const performSelect = jest.fn();

    const { findByTestId } = render(
      <AuthContext.Provider value={{ performSelect }}>
        <ColorButton {...defaultProps} />
      </AuthContext.Provider>
    );

    const colorButton = await findByTestId("color");
    fireEvent.click(colorButton);
    expect(performSelect).toHaveBeenCalledTimes(1);
  });
});
