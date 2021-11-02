import './styles.css';

type CardProps = {
  index: number;
  name: string;
  sprite: string;
  handler: (index: number) => void;
};

export function Card({ index, name, sprite, handler }: CardProps) {
  return (
    <div className='card' onClick={() => handler(index)}>
      <img className='sprite' src={sprite} alt={name} />
      <strong className='pokemon-name'>{name}</strong>
    </div>
  );
}