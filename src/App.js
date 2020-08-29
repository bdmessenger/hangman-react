import React, {useState, useEffect} from 'react';

import Game from './components/Game'
import Notification from './components/Notification'
import PopUp from './components/PopUp'
import Credits from './components/Credits'

const words = [
    'application', 'programming', 'interface', 
    'wizard', 'nintendo', 'dictionary', 
    'filmmaker', 'astronaut', 'javascript',
    'windows', 'ganondorf', 'california', 'pikachu'
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [isPlayable, setPlayable] = useState(true);
    const [isNotificationDisplayed, setNotificationDisplay] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
          const { key, keyCode } = event;
          if (isPlayable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
              } else {
                showNotification();
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
              } else {
                showNotification();
              }
            }
          }
        }

        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, isPlayable]);

    const showNotification = () => {
        setNotificationDisplay(true)
    
        setTimeout(() => {
            setNotificationDisplay(false);
        }, 2000);
    }

    const playAgain = () => {
        setPlayable(true);
        setCorrectLetters([]);
        setWrongLetters([]);
        
        selectedWord = words[Math.floor(Math.random() * words.length)];
    }

    return (
        <>
            <h1>Hangman</h1>
            <p>Find the hidden word - Enter a letter</p>
            <Game selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters}/>
            <PopUp 
                correctLetters={correctLetters} 
                wrongLetters={wrongLetters} 
                selectedWord={selectedWord} 
                setPlayable={setPlayable} 
                playAgain={playAgain}
            />
            <Notification isNotificationDisplayed={isNotificationDisplayed} />
            <Credits/>
        </>
    )
}

export default App;
