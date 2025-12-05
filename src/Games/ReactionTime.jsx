import React, { useEffect, useRef, useState } from "react";
import Scoreboard from "../Scoreboard";
import Leaderboard from "../Leaderboard";

function ReactionTime() {

    const _RED = "#9f0712";
    const _GREEN = "#00a63e";
    const _GREEN_SHADOW = "#43afc1";
    const _MSG_START = "Click to start!";
    const _MSG_WAIT = "When box turns green click it fastest you can...";
    const _MSG_READY = "Click now!";

    const [gameState, setGameState] = useState(0);
    const [result, setResult] = useState(null);

    const [bgColor, setBgColor] = useState("#9f0712");
    const [shadowColor, setShadowColor] = useState("#9f0712");
    const [msg, setMsg] = useState(_MSG_START);

    const timeoutRef = useRef(null);
    const startTimer = useRef(null);
    const stopTimer = useRef(null);

    const [resultList, setResultList] = useState([]);


    const handleClick = async () => {

        if (gameState == 1) {
            console.log("too fast");
            reset();
        } else if (gameState == 2) {
            // correct, get result - state 3
            stopTimer.current = new Date();

            let diff = stopTimer.current - startTimer.current;
            setResult(diff);
            setResultList((prev) => [...prev, diff]);

            // set states
            setMsg("Your result is: " + diff + " ms");

            setGameState(3);

            setBgColor(_RED);
            setShadowColor(_RED);

        } else if (gameState == 0 || gameState == 3) {
            setBgColor(_RED);
            setShadowColor(_RED);
            setGameState(1);
            setMsg(_MSG_WAIT);
            let delay = Math.floor(Math.random() * 6 + 3);
            console.log(delay);
            timeoutRef.current = setTimeout(() => {
                setGameState(2);
                setBgColor(_GREEN);
                setShadowColor(_GREEN_SHADOW);
                setMsg(_MSG_READY);
                startTimer.current = new Date();
            }, delay * 1000);
        }

    }

    const reset = () => {
        setGameState(0);
        setBgColor(_RED);
        setShadowColor(_RED);
        setMsg(_MSG_START);
        clearTimeout(timeoutRef.current);
        startTimer.current = null;
        stopTimer.current = null;
    }

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <section className="content-section">
            <div className="flex justify-between gap-5 m-5 pb-10 flex-row xl:flex-nowrap flex-wrap overflow-hidden">
                <Scoreboard className="xl:order-1 order-2" dataList={resultList} extension="ms" />
                <div onClick={handleClick} style={{ backgroundColor: bgColor, boxShadow: `0 15px 25px -12px ${shadowColor}` }} className="h-200 xl:w-fill w-full xl:order-2 order-1 flex justify-center items-center rounded-xl shadow-2xl "><p id="text1" className="h-fit text-2xl text-gray-900 mb-25 px-5 py-10">{msg}</p></div>
                <Leaderboard className="order-3" />
            </div>
        </section>
    );
};

export default ReactionTime;