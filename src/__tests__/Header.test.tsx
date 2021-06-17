import React from "react";

import { render, fireEvent } from "@testing-library/react";

import Header from "../Header/Header";
import AuthContext from "../context/AuthContext";

describe("Header", () => {
  test("should display header ui", async () => {
    const { findByTestId } = render(<Header />);
    const header = await findByTestId("header");
    const title = await findByTestId("title");
    const login = await findByTestId("login");
    expect(header).toContainElement(title);
    expect(header).toContainElement(login);
  });

  test("should log in user", async () => {
    const login = jest.fn();
    const { findByTestId } = render(
      <AuthContext.Provider value={{ login }}>
        <Header />
      </AuthContext.Provider>
    );
    const loginButton = await findByTestId("login");
    fireEvent.click(loginButton);
    expect(login).toHaveBeenCalledTimes(1);
  });
  test("should display logout button and log out user", async () => {
    const logout = jest.fn();
    const { findByTestId } = render(
      <AuthContext.Provider value={{ logout, isLoggedIn: true }}>
        <Header />
      </AuthContext.Provider>
    );
    const header = await findByTestId("header");
    const logoutButton = await findByTestId("logout");
    expect(header).toContainElement(logoutButton);
    fireEvent.click(logoutButton);
    expect(logout).toHaveBeenCalledTimes(1);
  });
});
