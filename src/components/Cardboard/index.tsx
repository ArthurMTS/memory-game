import { Card } from "../Card";

import './styles.css';

export function Cardboard() {
  return (
    <div id='cardboard'>
      <h2>Choose your pokémons</h2>
      <div id='cards'>
        <Card id='1' />
        <Card id='25' />
        <Card id='342' />
        <Card id='151' />
        <Card id='857' />
        <Card id='152' />
        <Card id='700' />
        <Card id='632' />
        <Card id='643' />
        <Card id='43' />
        <Card id='523' />
        <Card id='26' />
      </div>
    </div>
  );
}