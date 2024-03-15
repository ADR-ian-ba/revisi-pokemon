import IMove from "./IMove";
  
export default interface IPokemonDetail {
    id:string;
    name: string;
    height: number;
    weight: number;
    official: string;
    sprite: string;
    move: IMove[]
  }
