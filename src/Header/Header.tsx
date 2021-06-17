import React, { useContext } from "react";
import { Styles } from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { login, getCurrentUser, logout } = useContext(AuthContext);
  const user = getCurrentUser ? getCurrentUser() : null;

  return (
    <Styles.HeaderContainer>
      <p>SHAPES</p>
      {user ? (
        <Styles.AuthContainer color={"red"} onClick={logout}>
          <p>Logout</p>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Styles.AuthContainer>
      ) : (
        <Styles.AuthContainer color={"green"} onClick={login}>
          <p>Login</p>
          <FontAwesomeIcon icon={faSignInAlt} />
        </Styles.AuthContainer>
      )}
    </Styles.HeaderContainer>
  );
};

export default Header;
