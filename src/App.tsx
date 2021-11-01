import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cardboard } from './components/Cardboard';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Cardboard />
      </div>
      <Footer />
    </>
  );
}
