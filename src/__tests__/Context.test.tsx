import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthContextType } from "../context/AuthContext";

describe("Context", () => {
  test("should show value from provider", async () => {
    interface AType extends AuthContextType {
      test?: string;
    }
    const AuthContext = React.createContext<AType>({});
    const { container } = render(
      <AuthContext.Provider value={{ test: "testing" }}>
        <AuthContext.Consumer>
          {(value) => <span>Received: {value.test}</span>}
        </AuthContext.Consumer>
      </AuthContext.Provider>
    );
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent("Received: testing");
    expect(screen.getByText(/^Received:/).textContent).toBe(
      "Received: testing"
    );
  });
});
