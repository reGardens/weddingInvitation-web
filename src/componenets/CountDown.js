import React, { useCallback, useEffect, useState } from "react";

const CountDown = () => {
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    let interval;

    const startTimer = useCallback(() => {
        const countDownDate = new Date("May 30,2023").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setState({
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                })
            }
        });
    }, []);

    useEffect(() => {
        startTimer();
    });

    return (
        <div className="flex justify-center relative">
            <div className="text-2xl lg:text-5xl backdrop-blur-md flex shadow-inner items-center">
                <div className="px-5 flex flex-col justify-center items-center">
                    <p className="text-sm font-bold tracking-[3px]">Hari</p>
                    <p>{state.days}</p>
                </div>
                :
                <div className="px-5 flex flex-col justify-center items-center">
                    <p className="text-sm font-bold tracking-[3px]">Jam</p>
                    <p>{state.hours}</p>
                </div>
                :
                <div className="px-5 flex flex-col justify-center items-center">
                    <p className="text-sm font-bold tracking-[3px]">Menit</p>
                    <p>{state.minutes}</p>
                </div>
                :
                <div className="px-5 flex flex-col justify-center items-center">
                    <p className="text-sm font-bold tracking-[3px]">Detik</p>
                    <p>{state.seconds}</p>
                </div>
            </div>
        </div>
    )
}

export default CountDown;
