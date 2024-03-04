import '../App.css'
import Input from './Input'
import * as React from 'react';
import Guesses from './Guesses';
import GameResult from './GameResult';

const Game: React.FC = () => {
    return (
        <>
                <GameResult />
                <Input/>
                <Guesses/>
        </>
    )
}

export default Game
