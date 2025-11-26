import React, { use, useEffect, useRef, useState } from "react";
import ProgressBar from "./assets/ProgressBar";
import Scoreboard from "../Scoreboard";
import Leaderboard from "../Leaderboard";

function NumberMemory() {

    const _STARTING_LEVEL = 4;

    const [level, setlevel] = useState(_STARTING_LEVEL);

    const [gameState, setGameState] = useState(0);
    const [guessing, setGuessing] = useState(null);
    const inputNumber = useRef("");
    const [resultsArr, setResultsArr] = useState([]);

    const [progress, setProgress] = useState(100);

    const countdownRef = useRef(null);
    const clockRef = useRef(null);



    useEffect(() => {
        if (gameState == 1) {
            countdownRef.current = setTimeout(() => {
                setGameState(2);
            }, level * 1000);

            return () => {
                clearTimeout(countdownRef.current);
            };
        } else if (gameState == 2) {
            countdownRef.current = setTimeout(() => {

                if (inputNumber.current.value == guessing) {
                    setlevel((prev) => prev + 1);
                    setGuessing(getRandom(level + 1));

                    setGameState(1);
                } else {
                    if (level > 4) {
                        if (resultsArr.length < 50) {
                            setResultsArr([...resultsArr, level]);
                        } else {
                            setResultsArr([resultsArr.slice(1, resultsArr.length - 1), level]);
                        }
                    }
                    setGameState(3)
                }

            }, level * 1000 + 1000);

        }

    }, [gameState, level]);


    const next = () => {
        if (gameState == 0 || gameState == 3) {
            setlevel(_STARTING_LEVEL)
            setGuessing(getRandom(_STARTING_LEVEL));
            setGameState(1);

        }
    }

    function nextNumber() {
        return getRandom(level);
    }

    function getRandom(length) {
        var randNum = "";
        for (var x = 1; x <= length; x++) {
            randNum += Math.floor((Math.random() * 9) + 0);
        }
        return randNum;
    }

    const handlePaste = (e) => { e.preventDefault(); };

    return (
        <>
            <div className="flex justify-between text-gray-100 p-2 h-full">
                <Scoreboard dataList={resultsArr} extension="lvl" />

                <div className="flex h-fit items-center flex-col w-full">
                    <h1 className="w-fit text-3xl font-semibold mb-6">Number Memory</h1>
                    {gameState === 2 && (
                        <>
                            <ProgressBar duration={level * 1000 + 1000} />
                            <input onPaste={handlePaste} onDrop={handlePaste} autoComplete="off" name="num_input" ref={inputNumber} autoFocus type="number" className="bg-gray-700 mt-4 shadow-2xl shadow-cyan-700 text-center text-3xl p-1 text-gray-100 border-2 border-gray-800 rounded-xl w-1/2 mb-6" />
                        </>
                    )}
                    {gameState === 1 && (
                        <>
                            <ProgressBar duration={level * 1000} />
                            <h4 className="text-cyan-500 mt-4 text-2xl select-none">{guessing}</h4>
                        </>

                    )}
                    {gameState === 0 && (
                        <button onClick={next} className="btn bg-cyan-500 py-1 mt-4 px-4 rounded">Start</button>
                    )}
                    {gameState === 3 && (
                        <>
                            <h4>Well..., this is the end of the road</h4>
                            <h4>You heave reached level {level}</h4>
                            <button onClick={next} className="btn bg-cyan-500 py-1 mt-4 px-4 rounded">Retry</button>
                        </>

                    )}

                </div>
                <Leaderboard />
            </div>
        </>
    );
};

export default NumberMemory;
