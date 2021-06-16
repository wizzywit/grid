import React from "react";
import { Styles } from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Styles.HeaderContainer>
      <p>SHAPES</p>
      <Styles.AuthContainer>
        <p>Logout</p>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Styles.AuthContainer>
    </Styles.HeaderContainer>
  );
};

export default Header;
