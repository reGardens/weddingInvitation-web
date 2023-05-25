import React, { useEffect, useState } from "react";

// images
import personaliaImages from "../assets/images/personalia.jpg";
import ButtonGradient from "../componenets/ButtonGradient";
import { DaunBottomLeft, DaunBottomRight, DaunTopLeft, DauntTopRight } from "../componenets/Daun";
import ring from "../assets/icons/diamond-ring.png";

const Amplop = () => {
    const [showAmplop, setShowAmplop] = useState(true) // to hendle scroll indicator and add cannot scroll to body

    useEffect(() => {
        if (showAmplop) { // to hendle scroll indicator and add cannot scroll to body
            document.body.style.overflow = "hidden"
        }
    }, []);

    const buttonHandler = () => {
        const amplop = document.querySelector('.customSwipeAmplop');
        setShowAmplop(false) // to hendle scroll indicator and add cannot scroll to body
        amplop.style.transform = 'translateY(-100%)';
        document.body.style.overflow = "scroll"
    }

    return (
        <>
            <div className="fixed z-[9999] transition duration-500 ease-in-out delay-75 customSwipeAmplop w-screen h-full mx-auto bg-slate-50 flex flex-col justify-center items-center overflow-hidden">
                <DaunTopLeft />
                <DauntTopRight />
                <DaunBottomLeft />
                <DaunBottomRight />

                <div className="text-xl lg:text-2xl font-bold personal-name-style mb-5">
                    Mas Firman <img src={ring} className="w-[30px] inline-block" /> Ka Lika
                </div>

                <div className="border-2 border-black rounded-full">
                    <div className="rounded-full border-2 overflow-hidden border-transparent object-cover">
                        <img
                            src={personaliaImages}
                            className="img w-[170px] h-[170px] object-cover"
                        />
                    </div>
                </div>

                <div className="text-center text-2xl p-5 font-normal">
                    Kepada Yth. <br />
                    Bpk/Ibu/Saudara/i <br />
                    <span className="text-4xl font-bold">Pak Lurah</span> <br />
                    di Tempat
                </div>


                <ButtonGradient handleClick={buttonHandler} />
            </div>
        </>
    );
};

export default Amplop;
