import { useEffect, useState } from "react";
import Card from "./Card";
import { StyledGame } from "./styles/Game.styled";

function Game() {
  const [ champions, setChampions ] = useState([]);
  useEffect(() => {
    async function fetchVersion() {
      const versions = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
      const versionsResponse = await versions.json();
      const latestVersion = versionsResponse[0];
      return latestVersion;
    }
    async function fetchChampions(version) {
      const allChampions = await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
      const allChampionsResponse = await allChampions.json();
      const data = allChampionsResponse.data;
      return data;
    }
    async function setRandomChampions(numberOfPicks) {
      const latestVersion = await fetchVersion();
      const champions = await fetchChampions(latestVersion);
      const keys = Object.keys(champions);
      const randomChampions = [];
      for(let i = 0; i < numberOfPicks; i++) {
        let randomKey = keys[Math.floor(Math.random() * keys.length)];
        while(randomChampions.includes(champions[randomKey])) {
          randomKey = keys[Math.floor(Math.random() * keys.length)];
        }
        randomChampions.push(champions[randomKey]);
      }
      setChampions(randomChampions);
    }
    setRandomChampions(12);
  }, []);

  const [ score, setScore ] = useState(0);
  const [ maxScore, setMaxScore ] = useState(0);
  const [ pickedChampions, setPickedChampions ] = useState([]);
  function pickChampion(id) {
    setChampions(shuffleArray(champions));
    if(pickedChampions.includes(id)) {
      setScore(0);
      setPickedChampions([]);
    } else {
      setPickedChampions([...pickedChampions, id]);
      const newScore = score + 1;
      setScore(newScore);
      if(newScore > maxScore) setMaxScore(newScore);
    }
  }

  function shuffleArray(array) {
    const length = array.length;
    const copy = [...array];
    const newArray = [];
    for(let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      newArray[i] = copy.splice(randomIndex, 1)[0];
    }
    return newArray;
  }

  return (
    <StyledGame>
      <div className="grid-container">
        {champions.map((champion) => {
          return <Card key={champion.id} championId={champion.id} championName={champion.name} pickChampion={() => pickChampion(champion.id)} />;
        })}
      </div>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {maxScore}</p>
      </div>
    </StyledGame>
  );
}

export default Game;
