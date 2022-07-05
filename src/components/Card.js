import { StyledCard } from "./styles/Card.styled";

function Card({ championId, championName, pickChampion }) {
  return (
    <StyledCard onClick={pickChampion}>
      <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`} alt={championName} draggable={false} />
      <p>{championName}</p>
    </StyledCard>
  );
}

export default Card;
