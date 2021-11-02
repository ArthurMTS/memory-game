import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cardboard } from './components/Cardboard';

import { ScoreProvider } from './contexts/score';

import './global.css';

export function App() {
  return (
    <ScoreProvider>
      <Header />
      <Cardboard />
      <Footer />
    </ScoreProvider>
  );
}
