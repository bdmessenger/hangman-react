import React from 'react'

import Figure from './Figure'

const Game = ({selectedWord, correctLetters, wrongLetters}) => {
    return(
        <div className="game-container">
            <Figure wrongLetters={wrongLetters} />

            <div className="wrong-letters-container">
                <div id="wrong-letters">
                    {wrongLetters.length > 0 ? <p>Wrong</p> : ''}
                    {wrongLetters.map((letter, i) => <span key={i}>{letter}{wrongLetters.length - 1 !== i ? ', ' : ''}</span>)}
                </div>
            </div>

            <div className="word" id="word">
            {
                selectedWord.split('').map((letter, key) => 
                    <span key={key} className="letter">
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            }
            </div>
        </div>
    )
}

export default Game