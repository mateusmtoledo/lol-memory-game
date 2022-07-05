import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #000000bb;
    padding: 12px 0;
    color: #ffffff;
    font-weight: 700;
    margin: 0;
  }
`

export { StyledCard };
