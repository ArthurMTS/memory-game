import github from '../../assets/github.svg';

import './styles.css';

export function Footer() {
  return (
    <footer id='main-footer'>
      <p>Made with ❤️ by ArthurMTS</p>
      <a href='https://github.com/ArthurMTS/memory-game' target='_blank' rel='noreferrer'>
        <img src={github} alt='github icon' />
      </a>
    </footer>
  );
}