import React, { useEffect, useRef } from "react";

import daunAtas01 from "../assets/images/daun-atas-01.png";
import daunAtas02 from "../assets/images/daun-atas-02.png";
import daunAtas03 from "../assets/images/daun-atas-03.png";
import daunBottom03 from "../assets/images/daun-bottom-03.png";
import daunBottom03Reverse from "../assets/images/daun-bottom-03Reverse.png";
import daunBottom05 from "../assets/images/daun-bottom-05.png";
import daunBottom0501 from "../assets/images/daun-bottom-0501.png";
import daunBottom01 from "../assets/images/daun-bottom-01.png";
import daunBottom01Scale from "../assets/images/daun-bottom-01Scale.png";
import daunBottom01Turu from "../assets/images/daun-bottom-01Turu.png";
import daunBottom02 from "../assets/images/daun-bottom-02.png";
import daunBottom04 from "../assets/images/daun-bottom-04.png";

import anime from "animejs";

export const DaunTopLeftAmplop = () => {
    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current = anime({
            targets: '.animation-customTLA',
            translateX: [-100, 0],
            translateY: [-100, 0],
            scale: [0, 1],
            easing: "easeInOutSine",
            duration: 1000
        });
    }, []);
    
    return (
        <>
            <div className={`animation-customTLA absolute -top-2 left-0`}>
                <img src={daunAtas01} className="animate-spinTopLeft01" />
            </div>
            <div className="animation-customTLA absolute top-0 -left-2 z-10">
                <img src={daunAtas02} className="animate-spinTopLeft02" />
            </div>
            <div className="animation-customTLA absolute top-3 -left-1">
                <img src={daunAtas03} className="animate-spinTopLeft03" />
            </div>
        </>
    );
};

export const DaunTopLeft = () => {
    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current = anime({
            targets: '.animation-customTL',
            translateX: [-100, 0],
            translateY: [-100, 0],
            scale: [0, 1],
            easing: "easeInOutSine",
            duration: 1000
        });
    }, []);
    
    return (
        <>
            <div className={`animation-customTL absolute -top-2 left-0`}>
                <img src={daunAtas01} className="animate-spinTopLeft01" />
            </div>
            <div className="animation-customTL absolute top-0 -left-2 z-10">
                <img src={daunAtas02} className="animate-spinTopLeft02" />
            </div>
            <div className="animation-customTL absolute top-3 -left-1">
                <img src={daunAtas03} className="animate-spinTopLeft03" />
            </div>
        </>
    );
};

export const DauntTopRight = () => {
    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current = anime({
            targets: '.animation-customTR',
            translateX: [100, 0],
            translateY: [-100, 0],
            scale: [0, 1],
            easing: "easeInOutSine",
            duration: 1000
        });
    }, []);

    return (
        <>
            <div className="animation-customTR absolute top-[0] right-[40px] z-10">
                <img src={daunBottom05} className="animate-spinTopRight01" />
            </div>
            <div className="animation-customTR absolute top-0 right-0 z-20">
                <img src={daunBottom03} className="animate-spinTopRight02" />
            </div>
            <div className="animation-customTR absolute top-[45px] right-[0]">
                <img src={daunBottom0501} className="animate-spinTopRight03" />
            </div>
        </>
    )
}

export const DaunBottomLeft = () => {
    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current = anime({
            targets: '.animation-customBL',
            translateX: [-100, 0],
            translateY: [100, 0],
            scale: [0, 1],
            easing: "easeInOutSine",
            duration: 1000
        });
    }, []);

    return (
        <>
            <div className={`animation-customBL absolute bottom-1 left-2`}>
                <img src={daunBottom01Scale} className="animate-spinBottomLeft01" />
            </div>
            <div className={`animation-customBL absolute bottom-1 left-2`}>
                <img src={daunBottom01Turu} className="animate-spinBottomLeft02" />
            </div>
        </>
    )
}

export const DaunBottomRight = () => {
    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current = anime({
            targets: '.animation-customBR',
            translateX: [100, 0],
            translateY: [100, 0],
            scale: [0, 1],
            easing: "easeInOutSine",
            duration: 1000
        });
    }, []);

    return (
        <>
            <div className="animation-customBR absolute -bottom-2 -right-2">
                <img src={daunBottom02} className="animate-spinBottomRight02" />
            </div>
            <div className="animation-customBR absolute bottom-0 right-0 z-10">
                <img src={daunBottom03Reverse} className="animate-spinBottomRight03" />
            </div>
            <div className="animation-customBR absolute -bottom-4 right-7">
                <img src={daunBottom04} className="animate-spinBottomRight04" />
            </div>
        </>
    )
}
