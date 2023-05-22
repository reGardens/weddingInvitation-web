import React, { useState, useEffect } from "react";

// pages
import Amplop from "./Amplop"
import CountDown from "../componenets/CountDown";

// images
import imgPersonalia from "../assets/images/personalia.jpg"
import { DaunTopLeft } from "../componenets/Daun";
import ring from "../assets/icons/diamond-ring.png";

const MainPages = () => {

    return (
        <>
            <Amplop />

            <section className="flex justify-center relative w-full h-screen">
                <div className="bg-slate-50 w-full h-screen relative overflow-hidden">
                    <div className="!absolute w-[10rem] h-[10rem] top-0 left-0 z-50">
                        <DaunTopLeft />
                    </div>
                    <div className="!absolute w-[10rem] h-[10rem] z-50 top-0 right-0 -scale-x-[1]">
                        <DaunTopLeft />
                    </div>
                    <div className="!absolute w-[10rem] h-[10rem] z-50 bottom-0 left-0 -scale-y-[1]">
                        <DaunTopLeft />
                    </div>
                    <div className="!absolute w-[10rem] h-[10rem] z-50 bottom-0 right-0 rotate-[180deg]">
                        <DaunTopLeft />
                    </div>

                    <div className="mb-5">
                        {/* <div className="absolute top-0 left-0 h-24 bg-gradient-to-b w-full from-slate-50 to-transparent z-30">&nbsp;</div> */}
                        <img src={imgPersonalia} className="w-full h-screen opacity-20 object-cover contrast-200" />
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent">&nbsp;</div>

                        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-5">
                            <p className="text-6xl ">
                                Mas Firman <img src={ring} className="w-[30px] inline-block" /> Ka Lika
                            </p>
                            <p className="text-4xl">Sabtu, 30 Mei 2023</p>
                            <CountDown />
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-96">

            </section>
        </>
    );
};

export default MainPages;
