import { Colors } from "../types/colors";

export function getColorByNumber(colorNumber: number) {
    switch (colorNumber) {
    case 1:
        return Colors.red;
    case 2:
        return Colors.green;
    case 3:
        return Colors.blue;
    case 4:
        return Colors.gray;
    default:
        throw new Error('Unexpected number provided in getColorByNumber function')
    }
}
