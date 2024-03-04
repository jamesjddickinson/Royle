import { useContext } from 'react'
import '../App.css'
import { monarch } from '../types/types'
import * as React from 'react';
import Dynasty from './Dynasty';
import Reign from './Reign';

import { CombinedContext } from '../context/Context'
import Age from './Age';

const Guesses: React.FC = () => {
    const { userGuesses } = useContext(CombinedContext)

    function GuessList(): JSX.Element[] {
        return userGuesses.map((guess: monarch, index: number) => (
            <div key={index} className='guessCard'>
                <h3 className='monarchName'>{guess.name}</h3>
                <div style={{ "display": "flex" }}>
                    <Age {...guess} />
                    <Dynasty {...guess} />
                    <Reign {...guess} />
                </div>
                <p className='monarchFact'>{guess.fact}</p>
            </div>
        ))
    }

    function introText(): JSX.Element | null {
        if (userGuesses.length === 0) {
            return (
                <p>To play, simply start typing in an English Monarch. Use the clues to help determine who is the chosen monarch! </p>
            )
        }
        return null
    }

    return (
        <div className='guesses'>
            {introText()}
            {GuessList()}
        </div>
    )
}

export default Guesses
