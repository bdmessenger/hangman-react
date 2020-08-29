import React, {useEffect} from 'react'

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    const checkWin = (correct, wrong, word) => {
        let status = 'win';
      
        // Check for win
        word.split('').forEach(letter => {
          if(!correct.includes(letter)){
            status = '';
          }
        });
        
        // Check for lose
        if(wrong.length === 6) status = 'lose';
      
        return status;
    }

    const status = checkWin(correctLetters, wrongLetters, selectedWord);

    if(status === 'win') {
        finalMessage = 'Congratulations! You won! 😃';
        playable = false;
    } else if (status === 'lose') {
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `...the word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => {
        setPlayable(playable);
    });

    return(
        <div className="popup-container" id="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
                <h2 id="final-message">{finalMessage}</h2>
                <h3 id="final-message-reveal-word">{finalMessageRevealWord}</h3>
                <button id="play-button" onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
}

export default PopUp