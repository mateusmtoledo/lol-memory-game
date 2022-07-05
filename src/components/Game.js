import { useEffect, useState } from "react";
import Card from "./Card";
import { StyledGame } from "./styles/Game.styled";

function Game() {
  const [ champions, setChampions ] = useState([{id: 'MonkeyKing', name: 'Wukong'}]);
  
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

  return (
    <StyledGame>
      <div className="grid-container">
        {champions.map((champion) => {
          return <Card key={champion.id} championId={champion.id} championName={champion.name} />;
        })}
      </div>
    </StyledGame>
  );
}

export default Game;
