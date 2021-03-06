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

    .result {
      display: flex;
      align-items: flex-end;
      gap: 5px;
      margin-bottom: 25px;
      h2 {
        margin: 0;
      }

      p {
        margin: 0;
        margin-bottom: 3px;
      }
    }
  `,
};
