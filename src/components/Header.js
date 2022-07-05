import { StyledHeader } from "./styles/Header.styled";
import githubIcon from "../images/github.png";

function Header() {
  return (
    <StyledHeader>
      <h1>Memory Game</h1>
      <a className="github-link" href="https://github.com/mateusmtoledo">
          <img width="24px" height="24px" src={githubIcon} alt="GitHub" />
          <p>mateusmtoledo</p>
      </a>
    </StyledHeader>
  );
}

export default Header;
