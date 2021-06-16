import React from "react";
import Body from "./Body/Body";
import AuthProvider from "./context/AuthProvider";
import Header from "./Header/Header";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./theme";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={myTheme}>
        <Header />
        <Body />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
