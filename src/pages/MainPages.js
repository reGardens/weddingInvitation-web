import React, { useState, useEffect } from "react";

// pages
import Amplop from "./Amplop"

const MainPages = () => {
    const [countdownDate, setCountdownDate] = useState(new Date());

    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();
            console.log('countdownDate', countdownDate);
            // console.log('currentTime', currentTime);

            const distanceToDate = currentTime - countdownDate;

            // console.log('countdownDate', countdownDate);

            let days = Math.floor(distanceToDate - (60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <div className="flex justify-center">
            <Amplop />

            <div className="text-black w-[360px] bg-red-200">
                {/* s countdown */}
                <div className="countDowd flex justify-center">
                    {/* Hari : {state.days} <br />
                    Jam : {state.hours} <br />
                    Menit : {state.minutes} <br /> */}
                    Detik : {state.seconds}
                </div>
                {/* e countdown */}
            </div>
        </div>
    );
};

export default MainPages;
