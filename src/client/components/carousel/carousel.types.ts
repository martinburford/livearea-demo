// Interfaces
export interface ICarousel {
  /** Whether the carousel should render differently as it's being viewed in a restricted width container element */
  compact?: boolean;
  data: {
    pokemons: {
        name: string;
        classification: string;
        types: string[];
        resistant: string[];
        weaknesses: string[];
        image: string;
    }[];
  };
  /** How long a card stays visible for */
  delay: number;
  /** The unique name of the carousel */
  name: string;
  /** The speed of the animation between slides */
  speed: "slow" | "medium" | "fast";
}