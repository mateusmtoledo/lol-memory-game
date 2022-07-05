import styled from "styled-components";

const StyledGame = styled.div`
  position: relative;

  .grid-container {
    max-width: 1300px;
    display: grid;
    justify-content: center;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 2vw;
    padding: 2vw;
    padding-top: 4vw;
  }

  .scoreboard {
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: #000000bb;
    color: white;
    padding: 8px 16px;
  }
`;

export { StyledGame };
