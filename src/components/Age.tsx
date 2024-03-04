import { useContext, useState, useEffect } from 'react'
import { CombinedContext } from '../context/Context'
import { monarch } from '../types/types'

const Age: React.FC<monarch> = (guess: monarch) => {
    const { chosenMonarch } = useContext(CombinedContext)
    const [match, setMatch] = useState<Evaluation | undefined>()

    type Evaluation = "✓" | "↑" | "↓"

    useEffect(() => {
        evaluateMonarch();
    }, [guess]);

    function evaluateMonarch(): void {
        if (guess.age_at_coronation === chosenMonarch.age_at_coronation) setMatch("✓")
        if (guess.age_at_coronation > chosenMonarch.age_at_coronation) setMatch("↓")
        if (guess.age_at_coronation < chosenMonarch.age_at_coronation) setMatch("↑")
    }

    return (
        <div className="facts">
            <h4>Age when crowned</h4>
            <span style={{ display: 'block', textAlign: 'left' }}>{guess.age_at_coronation} {match}</span>
        </div>
    )
}

export default Age
