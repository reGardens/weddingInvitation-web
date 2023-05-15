import React, { useState, useEffect } from "react";

// pages
import Amplop from "./Amplop"
import CountDown from "../componenets/CountDown";

// images
import imgPersonalia from "../assets/images/personalia.jpg"

const MainPages = () => {

    return (
        <div className="flex justify-center">
            <Amplop />

            {/* itung mundur */}
            <div className="bg-slate-50 w-[360px] relative">
                <div className="mb-5 relative">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent z-10">&nbsp;</div>
                    <img src={imgPersonalia} className="opacity-50 object-cover" />
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent">&nbsp;</div>

                    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-5">
                        <p className="text-3xl">Him & Her</p>
                        <p className="text-4xl">Sabtu, 30 Mei 2023</p>
                        <CountDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPages;
