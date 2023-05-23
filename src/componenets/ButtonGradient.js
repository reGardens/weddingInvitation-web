import anime from "animejs";
import React, { useEffect, useRef } from "react";

const ButtonGradient = ({ onClick }) => {
    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current = anime({
            targets: '.anime-customButton',
            scale: [1, 1.2],
            direction: 'alternate',
            easing: "easeInOutSine",
            loop: true,
            duration: 2000
        });
    }, []);

    const ok = () => {
    }
    return <div className="flex text-white" onClick={onClick}>
        <button onClick={ok} className="anime-customButton mx-auto tracking-widest bg-gradient-to-r from-[#677081] to-[#979faf] px-7 py-2 font-semibold rounded-md">
            Buka Surat
        </button>
    </div>;
};

export default ButtonGradient;
