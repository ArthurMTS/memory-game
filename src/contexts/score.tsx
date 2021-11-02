import { createContext, ReactNode, useEffect, useState } from "react";

type ScoreContextData = {
  current: number;
  best: number;
  setCurrent: (number: number) => void;
  setBest: (number: number) => void;
};

type ScoreProviderProps = {
  children: ReactNode;
};

export const ScoreContext = createContext({} as ScoreContextData);

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    if (!best && localStorage.getItem('best')) {
      const bestScore = JSON.parse(localStorage.getItem('best') || '0');

      setBest(bestScore);
    }

    if (best > 0) localStorage.setItem('best', JSON.stringify(best));
  }, [best]);

  useEffect(() => {
    if (current > 0 && current > best) {
      setBest(current);
    }
  }, [current]);

  return (
    <ScoreContext.Provider value={{ current, setCurrent, best, setBest }}>
      {children}
    </ScoreContext.Provider>
  );
}