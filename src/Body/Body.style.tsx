import styled from "styled-components";

export const Styles = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.colors.main};
    padding: 50px 200px 50px 200px;
    min-height: calc(100vh - 188px);

    @media only screen and (max-width: 800px) {
      padding: 25px;
    }

    .filters {
      color: ${({ theme }) => theme.colors.title};
      font-weight: bold;
    }
  `,
  ShapesContainer: styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between;
    width: 50%; */
    gap: 25px;
    margin-bottom: 50px;
  `,
};
