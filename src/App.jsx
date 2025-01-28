// src/App.jsx
import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState
  ([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  function handleAddFighter(fighter) {
    if (money < fighter.price) {
      console.log("Not enough money")
    } else {
      setTeam([...team, fighter])
      const updatedZombieFighters = zombieFighters.filter((zombieFighter) => {
        return zombieFighter.id !== fighter.id
      })
      setZombieFighters(updatedZombieFighters)
      setMoney(money - fighter.price)
    }
  }

  function handleRemoveFighter(fighter) {
      setZombieFighters([...zombieFighters, fighter])
      const updatedTeam = team.filter((teamFighter) => {
        return fighter.id !== teamFighter.id
      })
      setTeam(updatedTeam)
      setMoney(money + fighter.price)
  }

  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0)
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0)

  return (
    <>
      <h1>Money: {money}</h1>
      <p>{money < 0 ? `You do not have enough money!` : ``}</p>
      <ul>
        {zombieFighters.map((zombieFighter, id) => 
          <li key={id}>
            Name: {zombieFighter.name}<br />Price: {zombieFighter.price}<br />Strength: {zombieFighter.strength}<br />Agility: {zombieFighter.agility}<br /><img src={zombieFighter.img}></img><br />
            <button onClick={() => {handleAddFighter(zombieFighter)}}>Add</button>
          </li>
        )}
      </ul>
      <h1>Team</h1>
      <p>{team.length === 0 ? `Pick some team members!`: ``}</p>
      <ul>
        {team.map((zombieFighter, id) => 
          <li key={id}>
            Name: {zombieFighter.name}<br />Price: {zombieFighter.price}<br />Strength: {zombieFighter.strength}<br />Agility: {zombieFighter.agility}<br /><img src={zombieFighter.img}></img><br />
            <button onClick={() => {handleRemoveFighter(zombieFighter)}}>Remove</button>
          </li>
        )}
      </ul>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
    </>
  );
}

export default App
