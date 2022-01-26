import React from 'react';
import { Footer } from "../Footer";
import { Header } from "../Header";
import { CardBoard } from "../../features/CardBoard";
import { ScoreProvider } from "../../contexts/score";
import { Box } from "@material-ui/core";
import "../../assets/css/global.scss";

export const App: React.FC = () =>  (
  <Box>
    <ScoreProvider>
      <Header />
      <CardBoard />
      <Footer />
    </ScoreProvider>
  </Box>
);
