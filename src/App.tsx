import './App.css'
import GamePage from './pages/GamePage'
import { CombinedContext } from './context/Context'
import { monarch } from './types/types'
import { monarchs } from './data/Monarchs'
import { useMemo, useState } from 'react'

function App() {
  const chosenIndex: number = useMemo(() => {
    const chosenIndex: number = Math.floor(Math.random() * monarchs.length)
    return chosenIndex;
  }, []);

  const [userGuesses, setUserGuesses] = useState<monarch[]>([])
  const [chosenMonarch, setChosenMonarch] = useState<monarch>(monarchs[chosenIndex])

  return (
      <CombinedContext.Provider value={{ chosenMonarch: chosenMonarch, userGuesses, setUserGuesses, setChosenMonarch}}>
        <GamePage />
      </CombinedContext.Provider>
  )
}

export default App