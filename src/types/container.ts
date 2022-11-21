import { Ball } from "./ball";

export interface Container {
    id: string;
    isFinished: boolean;
    isFull: boolean;
    balls: Ball[];
}
