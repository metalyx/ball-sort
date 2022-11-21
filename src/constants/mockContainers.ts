import { Colors } from "../types/colors";
import { Container } from "../types/container";

export const mockContainers: Container[] = [
    {
        id: '346346346',
        balls: [
            {
                id: '1',
                color: Colors.gray,
            },
            {
                id: '2',
                color: Colors.red,
            },
            {
                id: '3',
                color: Colors.green,
            },
            {
                id: '4',
                color: Colors.gray,
            },
        ],
        isFinished: false,
        isFull: true,
    },
    {
        id: '345234236546',
        balls: [
            {
                id: '5',
                color: Colors.blue,
            },
            {
                id: '6',
                color: Colors.red,
            },
            {
                id: '7',
                color: Colors.green,
            },
            {
                id: '8',
                color: Colors.green,
            },
        ],
        isFinished: false,
        isFull: true,
    },
    {
        id: '234256465989876',
        balls: [
            {
                id: '9',
                color: Colors.gray,
            },
            {
                id: '10',
                color: Colors.blue,
            },
            {
                id: '11',
                color: Colors.blue,
            },
            {
                id: '12',
                color: Colors.red,
            },
        ],
        isFinished: false,
        isFull: true,
    },
    {
        id: '234256461',
        balls: [
            {
                id: '13',
                color: Colors.red,
            },
            {
                id: '14',
                color: Colors.blue,
            },
            {
                id: '15',
                color: Colors.gray,
            },
            {
                id: '16',
                color: Colors.green,
            },
        ],
        isFinished: false,
        isFull: true,
    },
    {
        id: '3434223675',
        balls: [
        ],
        isFinished: false,
        isFull: false,
    },
]
