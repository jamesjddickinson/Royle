import { useContext, useState, useEffect } from 'react'
import { CombinedContext } from '../context/Context'
import { monarch } from '../types/types'
import '../App.css'

const Dynasty: React.FC<monarch> = (guess: monarch) => {
    const { chosenMonarch } = useContext(CombinedContext)
    const [match, setMatch] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        evaluateMonarch();
    }, [guess]);

    function evaluateMonarch(): void {
        if (guess.dynasty === chosenMonarch.dynasty) setMatch(true)
        else setMatch(false)
    }

    return (
        <div className='facts'>
            <h4>Dynasty</h4>
            <span className={`dynasty ${match ? 'green-text' : 'red-text'}`}>
                {guess.dynasty}
            </span>
        </div>
    )
}

export default Dynasty
