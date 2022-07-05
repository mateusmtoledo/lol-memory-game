import styled from "styled-components";

const StyledGame = styled.div`
  .grid-container {
    max-width: 1300px;
    display: grid;
    justify-content: center;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 32px;
  }
`;

export { StyledGame };
