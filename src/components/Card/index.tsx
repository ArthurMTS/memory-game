import './styles.css';

type CardProps = {
  name: string;
  sprite: string;
};

export function Card({ name, sprite }: CardProps) {
  return (
    <div className='card'>
      <img className='sprite' src={sprite} alt={name} />
      <strong className='pokemon-name'>{name}</strong>
    </div>
  );
}