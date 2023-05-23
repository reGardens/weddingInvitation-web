import React, { useState, useEffect } from "react";

// pages
import Amplop from "./Amplop"
import CountDown from "../componenets/CountDown";

// images
import imgPersonalia from "../assets/images/personalia.jpg"
import { DaunTopLeft } from "../componenets/Daun";
import ring from "../assets/icons/diamond-ring.png";
import bismillahirrahmanirrahim from "../assets/images/bismillahirrahmanirrahim.png"
import daunBottom03 from "../assets/images/daun-bottom-03.png";
import dummyArrow from "../assets/icons/arrows.png"

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
                            <p className="text-lg lg:text-4xl uppercase text-center">
                                The Wedding of
                            </p>
                            <p className="text-xl lg:text-4xl font-bold personal-name-style">
                                Mas Firman <img src={ring} className="w-[30px] inline-block" /> Ka Lika
                            </p>
                            <p className="lg:text-3xl text-center">
                                Kami akan menikah, dan kami ingin Anda
                                <br />
                                menjadi bagian dari hari istimewa kami!
                            </p>
                            <CountDown />
                            <p className="uppercase text-lg lg:text-4xl">Sabtu, 30 Mei 2023</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center relative w-full h-full overflow-hidden p-6">
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

                <div className="relative w-full h-full">
                    {/* efek glass */}
                    <div className="bg-white absolute opacity-60 z-50 w-full h-full rounded-3xl shadow-[0_0_40px_0px_rgba(0,0,0,0.1)]">&nbsp;</div>
                    {/* efek glass */}

                    <div className="py-3 flex flex-col items-center relative z-[60]">
                        <img src={bismillahirrahmanirrahim} className="w-72 h-20 object-cover" />

                        <p className="lg:text-4xl text-center font-bold mb-3">
                            Assalamu’alaikum Wr. Wb.
                        </p>

                        <p className="lg:text-3xl text-center mb-4">
                            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :
                        </p>

                        <img src={imgPersonalia} className="w-72 h-80 object-cover rounded-3xl mb-3" />

                        <p className="text-xl lg:text-2xl font-extrabold personal-name-style">Firman Hidayat</p>
                        <p className="text-base lg:text-2xl">Putri Keempat dari Bapak ........ & Ibu ........</p>
                        ~~~<img src={ring} className="w-[40px] my-4" />~~~
                        <p className="text-xl lg:text-2xl font-extrabold personal-name-style">Malikey</p>
                        <p className="text-base lg:text-2xl">Putri Keempat dari Bapak ........ & Ibu ........</p>

                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center relative w-full h-full overflow-hidden p-6">
                <div className="flex rotate-[130deg] justify-center items-center my-14">
                    <img src={daunBottom03} className="animate-spinTopRight02 opacity-70" />
                    <p className="lg:text-4xl absolute uppercase font-bold -rotate-[130deg] w-[13.6rem]">save the date</p>
                </div>

                <div className="relative w-full h-full overflow-hidden flex justify-center">
                    <div className="absolute flex justify-center items-center w-[21rem] h-full">
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

                    {/* efek glass */}
                    <div className="bg-white absolute opacity-60 z-50 w-full h-full rounded-3xl shadow-[0_0_40px_0px_rgba(0,0,0,0.1)]">&nbsp;</div>
                    {/* efek glass */}

                    <div className="py-3 flex flex-col items-center relative z-[60]">
                        <img src={ring} className="w-[50px] inline-block" />
                        <p className="lg:text-4xl uppercase">Akad nikah</p>

                        <div className="flex items-center text-3xl gap-4 bg-white py-1 px-3 m-3 rounded-md shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] relative">
                            <p className="font-bold">Sabtu <br /> 30 Mei 2023</p>
                            <img src={dummyArrow} className="w-[30px] h-[90px] rotate-12" />
                            <p className="font-bold">Pukul <br /> 7:30 - 11:00</p>
                        </div>

                        <p className="w-[40rem] text-center leading-none font-bold">
                            Alamat
                        </p>
                        <p className="w-[40rem] text-center leading-none font-bold">
                            Dikediaman Mempelai Wanita
                        </p>
                        <p className="w-[40rem] text-center leading-none">
                            Jl Pepaya I RT 002 RW 005 Kel. & Kec. Jagakarsa Jakarta Selatan , DKI Jakarta 12620
                        </p>
                    </div>
                </div>
                {/* <div className="bg-slate-50 w-full rounded-3xl shadow-[0_0_40px_0px_rgba(0,0,0,0.1)] pt-14">
                </div> */}
            </section>
        </>
    );
};

export default MainPages;
