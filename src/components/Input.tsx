import { useContext } from 'react'
import '../App.css'
import { monarchs } from '../data/Monarchs'
import { monarch } from '../types/types'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import * as React from 'react';
import { CombinedContext } from '../context/Context'

const Input: React.FC = () => {
    const { userGuesses, setUserGuesses } = useContext(CombinedContext)
    const [searchString, setSearchString] = React.useState<string>("")

    function handleOnSelect(selectedMonarch: monarch): void {
        if(userGuesses.length === 10 ) return
        setUserGuesses((prevUserGuesses) => [selectedMonarch, ...prevUserGuesses]);
        setSearchString("")
    }

    function handleOnSearch(searchInput: string): void {
        setSearchString(searchInput);
    };

    function formatResult(item: monarch): JSX.Element {
        return (
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
        )
    }

    return (
        <>
            <ReactSearchAutocomplete
                items={monarchs}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
                inputSearchString={searchString}
            />
        </>
    )
}

export default Input
