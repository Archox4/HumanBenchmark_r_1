import React, { useState, useEffect, useRef } from 'react';
import Scoreboard from '../Scoreboard';
import Leaderboard from '../Leaderboard';
import ProgressBar from './assets/ProgressBar';

export default function WordMemory() {
    /*
        state 0 = game start / go 1
        state 1 = game in progress / go 2 if correct | go 3 if wrong
        state 2 = next word / move back to 1
        state 3 = game over screen / go 4
        state 4 = reset an go to 0
    */
    const _LEVELS = [20, 30, 40, 50, 60, 70, 80, 90, 100];
    const _WORDS = [
        "apple", "banana", "orange", "grape", "strawberry", "blueberry", "pineapple", "mango", "kiwi", "peach",
        "car", "bike", "bus", "train", "plane", "boat", "ship", "truck", "scooter", "motorcycle",
        "house", "apartment", "condo", "villa", "cabin", "mansion", "shack", "bungalow", "cottage", "duplex",
        "dog", "cat", "bird", "fish", "hamster", "rabbit", "snake", "lizard", "horse", "cow",
        "computer", "phone", "tablet", "keyboard", "mouse", "printer", "monitor", "speaker", "camera", "microphone",
        "book", "pen", "pencil", "paper", "notebook", "eraser", "ruler", "stapler", "scissors", "backpack",
        "sun", "moon", "star", "cloud", "rain", "snow", "wind", "storm", "fog", "hail",
        "tree", "flower", "grass", "bush", "leaf", "root", "branch", "stem", "petal", "thorn",
        "river", "lake", "ocean", "mountain", "hill", "valley", "desert", "forest", "beach", "island",
        "happy", "sad", "angry", "excited", "calm", "tired", "sleepy", "hungry", "thirsty", "bored"
    ];

    const score = useRef(1);
    const [wordsSeen, setWordsSeen] = useState([]);
    const [randomWords, setRandomWords] = useState([]);
    const [word, setWord] = useState("");
    const [gameState, setGameState] = useState(0);
    const [scores, setScores] = useState([]);

    const timerRef = useRef(null);

    useEffect(() => {
        if (gameState == 0) {
            addNewWords();

        } else if (gameState == 1) {
            if (_LEVELS.includes(score.current)) {
                addNewWords();
            }
            nextWord();
            if (!wordsSeen.includes(word)) { setWordsSeen([...wordsSeen, word]); }


            timerRef.current = setTimeout(() => {
                clearTimeout(timerRef.current);
                setGameState(3);
            }, 4000);

        } else if (gameState == 2) {
            setGameState(1);

        } else if (gameState == 4) {
            setScores([...scores, score.current]);

            setGameState(0);
            setWord("");
            setWordsSeen([]);
            score.current = 1;
            setRandomWords([]);
        }
    }, [gameState]);

    const handleChoice = (choice) => {
        clearTimeout(timerRef.current);
        if (choice == "seen") {
            if (wordsSeen.includes(word)) {
                score.current++;
                setGameState(2);
            } else {
                setGameState(3);
            }
        } else if (choice == "new") {
            if (!wordsSeen.includes(word)) {
                score.current++;
                setGameState(2);
            } else {
                setGameState(3);
            }
        }
    };

    function nextWord() {
        let newWord = randomWords.at(Math.floor(Math.random() * randomWords.length));
        if (word == newWord) {
            nextWord();
        } else {
            setWord(newWord);
        }
    }

    function addNewWords() {
        var count = 0;
        while (count < 10) {
            var random = Math.floor(Math.random() * 100);
            var randomWord = _WORDS[random];
            var isUnique = true;
            randomWords.forEach(function (item, index) {
                if (item == randomWord) {
                    isUnique = false;
                }
            });
            if (isUnique) {
                count++;
                randomWords.push(randomWord);
            }
        }
    }

    return (
        <>
            <div className="flex justify-between m-5 flex-row mt-10">
                <Scoreboard dataList={scores} extension="lvl" />

                <div className="flex justify-center items-center flex-col h-full text-gray-100">
                    {gameState == 0 &&
                        <>
                            <div className='flex flex-col items-center'>
                                <h4 className='text-3xl'>Words Memory Game</h4>
                                <p className='text-xl mt-4'>Choose whether the word you see is new or you have seen it before</p>
                                <button onClick={() => setGameState(1)} className='mt-8 px-4 py-1 bg-green-500 text-gray-100 rounded'>Start</button>
                            </div>
                        </>
                    }
                    {gameState == 1 &&
                        <>
                            <ProgressBar duration={4000} />
                            <h4 className='text-3xl text-gray-100'>Level {score.current}</h4>
                            <h4 className='text-3xl text-cyan-500 mt-4'>{word}</h4>

                            <div className='flex flex-row justify-center'>
                                <button onClick={() => handleChoice("seen")} className='mt-8 px-4 py-1 me-4 bg-blue-500 text-gray-100 rounded'>Seen</button>
                                <button onClick={() => handleChoice("new")} className='mt-8 px-4 py-1 bg-green-500 text-gray-100 rounded'>New</button>
                            </div>
                        </>
                    }
                    {gameState == 3 &&
                        <>
                            <h4 className='text-3xl text-gray-100'>GG</h4>
                            <h4 className='text-3xl text-cyan-500 mt-4'>Your score is {score.current}</h4>
                            <button onClick={() => setGameState(4)} className='mt-8 px-4 py-1 bg-green-500 text-gray-100 rounded'>Play Again</button>
                        </>
                    }
                    {/* <div class="mt-2">
                        <h3 class="text-center">Score <span id="score" class="text-primary">New</span> (<span class="text-primary">latest score: </span><span id="latest_score" class="text-primary"></span>)</h3>
                    </div>
                    <div class="mt-1">
                        <h4 class="text-info text-center" id="word"></h4>
                    </div>
                    <div class="row flex-nowrap justify-content-center mt-2">
                        <button class="btn btn-warning" id="btn_seen">SEEN</button>
                        <button class="btn btn-info" id="btn_new">NEW</button>
                    </div> */}
                </div>
                <Leaderboard />
            </div>

        </>
    );
}
