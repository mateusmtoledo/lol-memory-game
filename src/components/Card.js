import { StyledCard } from "./styles/Card.styled";

function Card({ championId, championName }) {
  return (
    <StyledCard>
      <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`} alt={championName} />
      <p>{championName}</p>
    </StyledCard>
  );
}

export default Card;
