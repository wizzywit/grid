import styled from "styled-components";

interface ButtonProps {
  readonly isActive?: boolean;
  color: string;
}

export const Styles = {
  Container: styled.button<ButtonProps>`
    height: 50px;
    width: 50px;
    border: 0;
    background-color: ${({ color }) => color};
    border: ${({ isActive }) => (isActive ? "3px solid #1600ff" : "none")};
    box-shadow: ${({ isActive }) =>
      isActive ? "0px 0px 8px 5px rgba(178, 202, 250,0.75)" : "none"};
    border-radius: 50%;
    cursor: pointer;
  `,
};
