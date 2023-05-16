import React from "react";

import daunAtas01 from "../assets/images/daun-atas-01.png";
import daunAtas02 from "../assets/images/daun-atas-02.png";
import daunAtas03 from "../assets/images/daun-atas-03.png";
import daunBottom03 from "../assets/images/daun-bottom-03.png";
import daunBottom05 from "../assets/images/daun-bottom-05.png";
import daunBottom01 from "../assets/images/daun-bottom-01.png";
import daunBottom02 from "../assets/images/daun-bottom-02.png";
import daunBottom04 from "../assets/images/daun-bottom-04.png";


export const DaunTopLeft = () => {
    return (
        <>
            <div className={`absolute -top-2 left-0 animate-spinTopLeft01`}>
                <img src={daunAtas01} className="animate-animationFirstLoadPage" />
            </div>
            <div className="absolute top-0 -left-2 z-10 animate-spinTopLeft02">
                <img src={daunAtas02} className="animate-animationFirstLoadPage" />
            </div>
            <div className="absolute top-3 -left-1 animate-spinTopLeft03">
                <img src={daunAtas03} className="animate-animationFirstLoadPage" />
            </div>
        </>
    );
};

export const DauntTopRight = () => {
    return (
        <>
            <div className="absolute top-16 -right-[20px] animate-spinTopRight01">
                <img src={daunBottom05} className="-rotate-[60deg] animate-animationFirstLoadPage bg-blue-700" />
            </div>
            {/* <div className="absolute top-0 right-0 animate-spinTopRight02 z-10">
                <img src={daunBottom03} className="-rotate-[90deg] animate-animationFirstLoadPage" />
            </div> */}
            {/* <div className="absolute top-3 right-9 animate-spinTopRight03">
                <img src={daunBottom05} className="-rotate-[10deg] -scale-y-[1] animate-animationFirstLoadPage" />
            </div> */}
        </>
    )
}

export const DaunBottomLeft = () => {
    return (
        <>
            <div className="absolute bottom-1 left-2 animate-spinBottomLeft01">
                <img src={daunBottom01} className="transform rotate-[0deg] -scale-x-100 animate-animationFirstLoadPage" />
            </div>
            <div className="absolute -bottom-3 left-6 animate-spinBottomLeft02">
                <img src={daunBottom01} className="transform rotate-[90deg] animate-animationFirstLoadPage" />
            </div>
        </>
    )
}

export const DaunBottomRight = () => {
    return (
        <>
            <div className="absolute -bottom-2 -right-2 animate-spinBottomRight02">
                <img src={daunBottom02} className="animate-animationFirstLoadPage" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 animate-spinBottomRight03">
                <img src={daunBottom03} className="animate-animationFirstLoadPage" />
            </div>
            <div className="absolute -bottom-4 right-7 animate-spinBottomRight04">
                <img src={daunBottom04} className="animate-animationFirstLoadPage" />
            </div>
        </>
    )
}
