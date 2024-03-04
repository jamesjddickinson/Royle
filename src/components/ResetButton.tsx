import { useContext } from 'react'
import '../App.css'
import * as React from 'react';
import { CombinedContext } from '../context/Context'
import { monarchs } from '../data/Monarchs';

const ResetButton: React.FC = () => {
    const { setUserGuesses, setChosenMonarch } = useContext(CombinedContext)

    function resetGame(): void {
        const chosenIndex: number = Math.floor(Math.random() * monarchs.length)
        setChosenMonarch(monarchs[chosenIndex])
        setUserGuesses([])
    };

    return (
        <button onClick={resetGame}>
            New Game
        </button>
    )
}

export default ResetButton
