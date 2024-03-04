import { useContext, useState, useEffect } from 'react'
import { CombinedContext } from '../context/Context'
import { monarch } from '../types/types'

const Reign: React.FC<monarch> = (guess: monarch) => {
    const { chosenMonarch } = useContext(CombinedContext)
    const [match, setMatch] = useState<Evaluation | undefined>()

    type Evaluation = "✓" | "↑" | "↓"

    useEffect(() => {
        evaluateMonarch();
    }, [guess]);

    function evaluateMonarch(): void {
        if (guess.end_year === chosenMonarch.end_year) setMatch("✓")
        if (guess.end_year > chosenMonarch.end_year) setMatch("↓")
        if (guess.end_year < chosenMonarch.end_year) setMatch("↑")
    }

    return (
        <>
            <div className='facts'>
                <h4>Start of reign</h4>
                <span style={{ display: 'block', textAlign: 'left' }}>{guess.start_year} {match}</span>
            </div>
            <div className='facts'>
                <h4>End of reign</h4>
                <span style={{ display: 'block', textAlign: 'left' }}>{guess.end_year} {match}</span>
            </div>
        </>
    )
}

export default Reign
