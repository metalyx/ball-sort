import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SIZE_OF_CONTAINERS } from "../../constants/sizeOfContainers";
import { Container } from "../../types/container";

interface InitialState {
    containers: Container[];
    initialContainers: Container[];
}

const initialState: InitialState = {
    containers: [],
    initialContainers: [],
}

export const ballSlice = createSlice({
    name: 'ball',
    initialState,
    reducers: {
        reset: (state) => {
            state.containers = [...state.initialContainers];
        },

        resetInitialContainers: (state) => {
            state.initialContainers = [];
        },

        setContainers: (state, action: PayloadAction<Container[]>) => {
            state.containers = action.payload;
            if (state.initialContainers.length === 0) {
                state.initialContainers = action.payload;
            }
        },

        move: (state, action: PayloadAction<[Container, Container]>) => {
            // Find donor-container in state
            const donor = state.containers.find((container) => container.id === action.payload[0].id);

            // Find recipient-container in state
            const recipient = state.containers.find((container) => container.id === action.payload[1].id);

            if (donor && donor.balls.length < SIZE_OF_CONTAINERS) {
                donor.isFull = false;
                donor.isFinished = false;
            }
            if (recipient && recipient.balls.length < SIZE_OF_CONTAINERS) {
                recipient.isFull = false;
                recipient.isFinished = false;
            }

            // If donor don't have any balls - we can't do anything
            if (action.payload[0].balls.length === 0) {
                return;
            }

            // If donor-container is finished - we don't touch it
            if (action.payload[0].isFinished) {
                return;
            }

            // If recipient-container is full - we can't append to it
            if (action.payload[1].isFull) {
                return;
            }

            // Donor's top ball and recipient's top ball are not matching colors
            if (action.payload[1].balls[0]?.color && action.payload[0].balls[0]?.color !== action.payload[1].balls[0]?.color) {
                return;
            }

            // Remove top ball from donor-container
            const shiftedBall = donor?.balls.shift();

            if (recipient && shiftedBall) {
                const newLengthOfRecipient = recipient.balls.unshift(shiftedBall);

                // If after append a ball to recipient its length is more or equal to limit - he is full then
                if (newLengthOfRecipient >= SIZE_OF_CONTAINERS) {
                    recipient.isFull = true;

                    const checkColor = recipient.balls[0].color;
                    let isFinished = true;

                    // If all balls are the same color, then the container is finished
                    recipient.balls.forEach((ball) => {
                        if (ball.color !== checkColor) {
                            isFinished = false;
                        }
                    });

                    recipient.isFinished = isFinished;
                }

                if (donor && donor.balls.length < SIZE_OF_CONTAINERS) {
                    donor.isFull = false;
                    donor.isFinished = false;
                }
            }
        }
    }
});

export const { move, setContainers, reset, resetInitialContainers } = ballSlice.actions;

export default ballSlice.reducer;
