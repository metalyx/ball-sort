import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { move, setContainers, reset, resetInitialContainers } from './store/ball/ballSlice';
import './App.css';
import { Container } from './types/container';
import generateContainers from './helpers/generateContainers';

function App() {
    const { containers } = useAppSelector((state) => state.ball);
    const dispatch = useAppDispatch();
    const [clickedContainer, setClickedContainer] = useState<Container>();
    const [appendedContainer, setAppendedContainer] = useState<Container>();

    const [isWon, setIsWon] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAppendedContainer(undefined)
        }, 100);
    }, [appendedContainer]);

    useEffect(() => {
        dispatch(resetInitialContainers())
        dispatch(setContainers(generateContainers()));
    }, []);

    useEffect(() => {
        let countFinished = 0;

        containers.forEach((container) => {
            if (container.isFinished) {
                countFinished += 1;
            }
        })

        if (countFinished >= 4) {
            setIsWon(true);
        }
    }, [containers]);

    const clickContainer = (clicked: Container) => {
        if (clickedContainer !== undefined) {
            if (clickedContainer.id === clicked.id) {
                setClickedContainer(undefined);
                setAppendedContainer(undefined);
            } else {
                dispatch(move([clickedContainer, clicked]));
                setClickedContainer(undefined);
                setAppendedContainer(clicked);
            }
        } else {
            setClickedContainer(clicked);
        }
    };

    const generateNewButtonClick = () => {
        dispatch(resetInitialContainers());
        dispatch(setContainers(generateContainers()));
        setIsWon(false);
    }

    const resetButtonClick = () => {
        dispatch(reset());
        setIsWon(false);
    }

    return (
        <>
            <div className='App'>
                <div className='gameTitle'>
                    <h1>Ball Sort</h1>
                </div>
                <div className='flex'>
                    {containers.map((container) => (
                        <div
                            className={`
                                    container
                                    ${clickedContainer?.id === container.id ? 'goup' : ''}
                                    ${appendedContainer?.id === container.id ? 'goup' : ''}
                                `}
                            key={container.id}
                            onClick={() => clickContainer(container)}
                        >
                            {container.balls.map((ball) => (
                                <div key={ball.id} className={`ball ${ball.color}`}></div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='controlsContainer'>
                    <button onClick={() => generateNewButtonClick()}>Generate New</button>
                    <button onClick={() => resetButtonClick()}>Reset</button>
                </div>
            </div>
            <div className={`popup ${isWon ? '' : 'hidden'}`}>
                <div className='popupBackground'>
                    <div className='popupTitle'>
                        Congratulations!
                    </div>
                    <div className='controlsContainer'>
                        <button onClick={() => generateNewButtonClick()}>Next Level</button>
                        <button onClick={() => resetButtonClick()}>Reset This Level</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
