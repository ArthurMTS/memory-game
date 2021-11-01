import pokeball from '../../assets/pokeball.png';

import './styles.css'

export function Header() {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={pokeball} alt='pokeball icon' />
        <h1><span>Poké</span>Mem</h1>
      </div>
      <div id='scoreboard'>
        <p id='current'>Current: 0</p>
        <p id='best'>Best: 0</p>
      </div>
    </header>
  );
}