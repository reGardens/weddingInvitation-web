// libraries
import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import Maps from "../componenets/Maps";

// images
import imgPersonalia from "../assets/images/personalia.jpg"
import ring from "../assets/icons/diamond-ring.png";
import bucketFlower from "../assets/icons/bucket.png";
import bismillahirrahmanirrahim from "../assets/images/bismillahirrahmanirrahim.png"
import daunBottom03 from "../assets/images/daun-bottom-03.png";
import dummyArrow from "../assets/icons/arrows.png"
import personaliaImages from "../assets/images/personalia.jpg";

// pages
import CountDown from "../componenets/CountDown";
import ButtonGradient from "../componenets/ButtonGradient";
import { DaunBottomLeft, DaunBottomRight, DaunTopLeft, DauntTopRight, DaunTopLeftAmplop } from "../componenets/Daun";
import GlassEffect from "../componenets/GlassEffect";
import FloralBorder from "../componenets/FloralBorder";

const MainPages = () => {
    const animationRef = useRef(null)
    const [showIndicatorAmplop, setShowIndicatorAmplop] = useState(true) // to hendle scroll indicator and add cannot scroll to body
    const [loadBodyContent, setLoadBodyContent] = useState(false) // body baru ke load ketika klik button amplop

    useEffect(() => {
        if (showIndicatorAmplop) { // to hendle scroll indicator and add cannot scroll to body
            document.body.style.overflow = "hidden"
        }
    }, []);

    const buttonHandler = () => {
        const amplop = document.querySelector('.customSwipeAmplop');
        setShowIndicatorAmplop(false) // to hendle scroll indicator and add cannot scroll to body
        amplop.style.transform = 'translateY(-100%)';
        document.body.style.overflow = "scroll"
        setLoadBodyContent(true) // body baru ke load ketika klik button amplop
    }

    useEffect(() => {
        animationRef.current = anime({
            targets: '.animation-fadeIn',
            scale: [0, 1],
            easing: "easeInOutSine",
            duration: 1000
        });
    }, []);
    return (
        <>
            {/* <Amplop /> */}
            <div className="fixed z-[9999] transition duration-500 ease-in-out delay-75 customSwipeAmplop w-screen h-full mx-auto bg-slate-50 flex flex-col justify-center items-center overflow-hidden">
                <DaunTopLeftAmplop />
                <DauntTopRight />
                <DaunBottomLeft />
                <DaunBottomRight />

                <div className="animation-fadeIn text-xl lg:text-2xl font-bold personal-name-style mb-5">
                    Mas Firman <img src={ring} className="w-[30px] inline-block" /> Ka Lika
                </div>

                <div className="animation-fadeIn border-2 border-black rounded-full">
                    <div className="rounded-full border-2 overflow-hidden border-transparent object-cover">
                        <img
                            src={personaliaImages}
                            className="img w-[170px] h-[170px] object-cover"
                        />
                    </div>
                </div>

                <div className="animation-fadeIn text-center text-2xl p-5 font-normal">
                    Kepada Yth. <br />
                    Bpk/Ibu/Saudara/i <br />
                    <span className="text-4xl font-bold">Pak Lurah</span> <br />
                    di Tempat
                </div>

                <ButtonGradient animation="animation-fadeIn" handleClick={buttonHandler} />
            </div>

            {
                loadBodyContent ? (
                    <>
                        <section className="flex justify-center relative w-full h-screen">
                            <div className="bg-slate-50 w-full h-screen relative overflow-hidden">
                                <div className="!absolute w-[10rem] h-[10rem] z-50 top-0 left-0">
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

                                    <div className="!animation-fadeIn absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-5">
                                        <p className={`text-2xl lg:text-4xl uppercase text-center`}>
                                            The Wedding of
                                        </p>
                                        <p className="text-2xl lg:text-4xl font-bold personal-name-style">
                                            Firman <img src={ring} className="w-[30px] inline-block" /> Lika
                                        </p>
                                        <p className="text-xl lg:text-3xl text-center">
                                            Kami akan menikah, dan kami ingin Anda
                                            <br />
                                            menjadi bagian dari hari istimewa kami!
                                        </p>
                                        {/* <CountDown /> */}
                                        <p className="uppercase text-2xl lg:text-4xl">Sabtu, 30 Mei 2023</p>
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
                                <GlassEffect />

                                <div className="py-3 flex flex-col items-center relative z-[60]">
                                    <img src={bismillahirrahmanirrahim} className="w-72 h-20 object-cover" />

                                    <p className="text-2xl lg:text-4xl text-center font-bold mb-3">
                                        Assalamu’alaikum Wr. Wb.
                                    </p>

                                    <p className="text-xl lg:text-3xl text-center mb-4">
                                        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :
                                    </p>

                                    <img src={imgPersonalia} className="w-72 h-80 object-cover rounded-3xl mb-3" />

                                    <p className="text-xl lg:text-2xl font-extrabold personal-name-style">Firman Hidayat</p>
                                    <p className="text-xl lg:text-3xl">Putri Keempat dari Bapak ........ & Ibu ........</p>
                                    ~~~<img src={ring} className="w-[40px] my-4" />~~~
                                    <p className="text-lg lg:text-3xl font-extrabold personal-name-style">Malikey</p>
                                    <p className="text-xl lg:text-3xl">Putri Keempat dari Bapak ........ & Ibu ........</p>

                                </div>
                            </div>
                        </section>

                        <section className="flex flex-col justify-center items-center relative w-full h-full overflow-hidden p-6">
                            <div className="flex rotate-[130deg] justify-center items-center my-14">
                                <img src={daunBottom03} className="animate-spinTopRight02 w-[5rem] opacity-70" />
                                <p className="text-2xl lg:text-4xl absolute uppercase font-bold -rotate-[130deg] min-w-max mx-auto">save the date</p>
                            </div>

                            <div className="relative w-full h-full flex justify-center">
                                <GlassEffect />
                                <FloralBorder />

                                <div className="flex-1 lg:flex justify-center">
                                    <div className="flex flex-col items-center justify-center relative z-[60] lg:my-6 mt-6 lg:mt-0">
                                        <img src={ring} className="w-[60px] inline-block" />
                                        <p className="text-2xl lg:text-4xl font-bold mt-2 uppercase">Akad nikah</p>

                                        <div className="flex items-center text-xl lg:text-3xl gap-2 lg:gap-4 bg-[rgba(0,0,0,0.1)] py-1 px-3 m-3 rounded-md shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] relative">
                                            <p className="font-bold">Sabtu <br /> 30 Mei 2023</p>
                                            <img src={dummyArrow} className="w-[20px] lg:w-[30px] h-[90px] rotate-12" />
                                            <p className="font-bold">Pukul <br /> 7:30 - 11:00</p>
                                        </div>

                                        <p className="text-xl lg:text-3xl w-[40rem] text-center leading-none font-bold">
                                            Alamat
                                        </p>
                                        <p className="text-xl lg:text-3xl w-[40rem] text-center leading-none font-bold">
                                            Dikediaman Mempelai Wanita
                                        </p>
                                        <p className="text-xl lg:text-3xl w-[20rem] lg:w-[40rem] text-center leading-none">
                                            Jl Pepaya I RT 002 RW 005 Kel. & Kec. Jagakarsa Jakarta Selatan , DKI Jakarta 12620
                                        </p>
                                    </div>

                                    <div className="py-3 flex flex-col items-center relative z-[60]">
                                        <Maps />
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-full flex justify-center mt-6">
                                <GlassEffect />
                                <FloralBorder />

                                <div className="flex-1 lg:flex justify-center">
                                    <div className="flex flex-col items-center justify-center relative z-[60] lg:my-6 mt-6 lg:mt-0">
                                        <img src={bucketFlower} className="w-[70px] inline-block" />
                                        <p className="text-2xl lg:text-4xl font-bold mt-1 uppercase">Resepsi</p>

                                        <div className="flex items-center text-2xl lg:text-3xl gap-2 lg:gap-4 bg-[rgba(0,0,0,0.1)] py-1 px-3 m-3 rounded-md shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] relative">
                                            <p className="font-bold">Sabtu <br /> 30 Mei 2023</p>
                                            <img src={dummyArrow} className="w-[20px] lg:w-[30px] h-[90px] rotate-12" />
                                            <p className="font-bold">Pukul <br /> 11:00 - Selesai</p>
                                        </div>

                                        <p className="text-xl lg:text-3xl w-[40rem] text-center leading-none font-bold">
                                            Alamat
                                        </p>
                                        <p className="text-xl lg:text-3xl w-[40rem] text-center leading-none font-bold">
                                            Dikediaman Mempelai Wanita
                                        </p>
                                        <p className="text-xl lg:text-3xl w-[20rem] lg:w-[40rem] text-center leading-none">
                                            Jl Pepaya I RT 002 RW 005 Kel. & Kec. Jagakarsa Jakarta Selatan , DKI Jakarta 12620
                                        </p>
                                    </div>

                                    <div className="py-3 flex flex-col items-center relative z-[60]">
                                        <Maps />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="flex flex-col justify-center items-center relative w-full h-full overflow-hidden p-6">
                            <div className="flex rotate-[130deg] justify-center items-center my-14">
                                <img src={daunBottom03} className="animate-spinTopRight02 w-[5rem] opacity-70" />
                                <p className="text-2xl lg:text-4xl absolute uppercase font-bold -rotate-[130deg] min-w-max mx-auto">gallery</p>
                            </div>
                        </section>

                    </>
                ) : (
                    <div></div>
                )
            }
        </>
    );
};

export default MainPages;
