import React from "react";
import { DaunTopLeft } from "../componenets/Daun";

const FloralBorder = () => {
    return (
        <div className="absolute w-[21rem] h-full flex justify-center items-center opacity-90">
            <div className="relative w-full h-[21rem]">
                <div className="!absolute w-[10rem] h-[10rem] top-0 left-0 z-50 rotate-180">
                    <DaunTopLeft />
                </div>
                <div className="!absolute w-[10rem] h-[10rem] z-50 top-0 right-0 -scale-x-[1] rotate-180">
                    <DaunTopLeft />
                </div>
                <div className="!absolute w-[10rem] h-[10rem] z-50 bottom-0 left-0 -scale-y-[1] rotate-180">
                    <DaunTopLeft />
                </div>
                <div className="!absolute w-[10rem] h-[10rem] z-50 bottom-0 right-0">
                    <DaunTopLeft />
                </div>
            </div>
        </div>

    );
};

export default FloralBorder;
