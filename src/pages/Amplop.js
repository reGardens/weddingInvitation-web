import React, { useEffect, useState } from "react";

// images
import personaliaImages from "../assets/images/personalia.jpg";
import ButtonGradient from "../componenets/ButtonGradient";
import { DaunBottomLeft, DaunBottomRight, DaunTopLeft, DauntTopRight } from "../componenets/Daun";
import ring from "../assets/icons/diamond-ring.png";

const Amplop = () => {
    const [showAmplop, setShowAmplop] = useState(true)

    useEffect(() => {
        if (showAmplop) {
            document.body.style.overflow = "hidden"
        }
    }, []);

    const buttonHandler = () => {
        const amplop = document.querySelector('.customSwipeAmplop');
        setShowAmplop(false)
        amplop.style.transform = 'translateY(-100%)';
        document.body.style.overflow = "scroll"
    }

    return (
        <>
            {/* {
                showAmplop && ( */}
            <div className="fixed z-[9999] transition duration-500 ease-in-out delay-75 customSwipeAmplop w-screen h-full mx-auto bg-slate-50 flex flex-col justify-center items-center overflow-hidden">
                <DaunTopLeft />
                <DauntTopRight />
                <DaunBottomLeft />
                <DaunBottomRight />

                <div className="border-2 border-black rounded-full">
                    <div className="rounded-full border-2 overflow-hidden border-transparent object-cover">
                        <img
                            src={personaliaImages}
                            className="img w-[170px] h-[170px] object-cover"
                        />
                    </div>
                </div>

                <div className="text-center text-4xl p-5 font-normal">
                    Wedding Invitation
                </div>

                <div className="text-2xl personal-name-style mb-5">
                    Mas Firman <img src={ring} className="w-[30px] inline-block" /> Ka Lika
                </div>


                <ButtonGradient onClick={buttonHandler} />
            </div>
            {/* //     )
            // } */}
        </>
    );
};

export default Amplop;
