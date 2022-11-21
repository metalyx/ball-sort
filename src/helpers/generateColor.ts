import { Colors } from "../types/colors";
import { getColorByNumber } from "./getColorByNumber";
import { getRandomIntInRange } from "./getRandomIntInRange";

export function generateColor(leftColors: {
    RED: number;
    GREEN: number;
    BLUE: number;
    GRAY: number;
}): Colors.red | Colors.green | Colors.blue | Colors.gray {

    const color = getColorByNumber(getRandomIntInRange(1, 4));

    if (leftColors[color] > 0) {
        leftColors[color] -= 1;
        return color;
    } else {
        return generateColor(leftColors);
    }
}
