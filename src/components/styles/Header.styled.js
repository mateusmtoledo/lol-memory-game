import styled from "styled-components";

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
color: white;
padding: 0 16px;

h1 {
  font-size: 1.2rem;
}

a {
  color: white;
  text-decoration: none;
}

.github-link {
  display: flex;
  gap: 8px;
  align-items: center;
}
`

export { StyledHeader };
