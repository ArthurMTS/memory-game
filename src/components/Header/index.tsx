import { useContext } from 'react';

import { ScoreContext } from '../../contexts/score';

import pokeball from '../../assets/pokeball.png';

import './styles.css';

export function Header() {
  const { current, best } = useContext(ScoreContext);

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={pokeball} alt='pokeball icon' />
        <h1><span>Poké</span>Mem</h1>
      </div>
      <div id='scoreboard'>
        <p id='current'>Current: {current}</p>
        <p id='best'>Best: {best}</p>
      </div>
    </header>
  );
}