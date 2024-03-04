import { useContext, useEffect } from 'react'
import '../App.css'
import * as React from 'react';
import { CombinedContext } from '../context/Context'
import ResetButton from './ResetButton';

const GameResult: React.FC = () => {
    const { userGuesses, chosenMonarch } = useContext(CombinedContext)

    useEffect(() => {
        evaluateGame();
    }, [userGuesses]);

    const maxGuesses = 10

    function evaluateGame(): React.ReactElement {
        if(userGuesses[0]?.name === chosenMonarch.name){
            return (
                <>
                <h2>Congrats! You solved the game in {userGuesses.length} attempts. You slayed it queen!</h2>
                <ResetButton/>
                </>
            )
        }
        if(userGuesses.length === maxGuesses){
            return (
                <h2>
                You failed! The correct answer {chosenMonarch.name} from {chosenMonarch.dynasty}. Now off with your head!
                </h2>
            )
        }
        return(
            <p> {userGuesses.length} of 10</p>
        )
    }


    return (
        <>
        {evaluateGame()}
        </>
    )
}

export default GameResult
