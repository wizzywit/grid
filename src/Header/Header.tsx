import React, { useContext } from "react";
import { Styles } from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);

  return (
    <Styles.HeaderContainer data-testid="header">
      <p data-testid="title">SHAPES</p>
      {isLoggedIn ? (
        <Styles.AuthContainer
          color={"red"}
          onClick={logout}
          data-testid="logout"
        >
          <p>Logout</p>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Styles.AuthContainer>
      ) : (
        <Styles.AuthContainer
          color={"green"}
          onClick={login}
          data-testid="login"
        >
          <p>Login</p>
          <FontAwesomeIcon icon={faSignInAlt} />
        </Styles.AuthContainer>
      )}
    </Styles.HeaderContainer>
  );
};

export default Header;
