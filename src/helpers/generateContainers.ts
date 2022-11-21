import { Container } from "../types/container";
import { v4 as uuidv4 } from 'uuid';
import { getColorByNumber } from "./getColorByNumber";
import { getRandomIntInRange } from "./getRandomIntInRange";
import { generateColor } from "./generateColor";
import { Colors } from "../types/colors";

export default function generateContainers(): Container[] {
    const containers: Container[] = [];
    const leftColors = {
        'RED': 4,
        'GREEN': 4,
        'BLUE': 4,
        'GRAY': 4
    }
    for (let i = 0; i < 4; i++) {
        const object: Container = {
            id: uuidv4(),
            isFinished: false,
            isFull: true,
            balls: [
                getBall(leftColors),
                getBall(leftColors),
                getBall(leftColors),
                getBall(leftColors)
            ],
        };

        const colorsArray = object.balls.map((ball) => ball.color)

        // If some of the containers has 4 same-colored balls -> re-generate containers
        if (new Set(colorsArray).size === 1) {
            return generateContainers();
        } else {
            containers.push(object);
        }
    }

    containers.push(getEmptyContainer())
    containers.push(getEmptyContainer())

    return containers;
}

function getBall (leftColors: {
    RED: number;
    GREEN: number;
    BLUE: number;
    GRAY: number;
}) {
    return {
        id: uuidv4(),
        color: generateColor(leftColors)
    }
}

function getEmptyContainer () {
    return {
        id: uuidv4(),
        isFinished: false,
        isFull: false,
        balls: [],
    }
}
