export type CardProps = {
  index: number;
  name: string;
  sprite: string;
  handler: (index: number) => void;
};