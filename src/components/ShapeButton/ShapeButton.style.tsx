import styled from "styled-components";

interface ButtonProps {
  readonly isActive?: boolean;
}

export const Styles = {
  Container: styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    border: 0;
    color: black;
    padding: 7px 15px;
    border: 2px solid ${({ isActive }) => (isActive ? "#b4cafa" : "#c9c9cd")};
    background-color: ${({ isActive }) =>
      isActive ? "#dee7fa" : "transparent"};
    border-radius: 30px;
    cursor: pointer;
    p {
      margin: 0;
      font-weight: bold;
    }
  `,
};
