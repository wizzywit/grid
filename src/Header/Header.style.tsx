import styled from "styled-components";

export const Styles = {
  HeaderContainer: styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    align-items: center;
    box-shadow: 0px 6px 5px 0px rgba(235, 240, 248, 0.75);
    padding: 15px 200px 15px 200px;
    z-index: 9999;
    position: relative;

    @media only screen and (max-width: 800px) {
      padding: 15px 25px 15px 25px;
    }
  `,
  AuthContainer: styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    color: red;
    border: 0;
    padding: 0;
    cursor: pointer;
    background-color: white;
    p {
      margin: 0px;
    }
  `,
};
