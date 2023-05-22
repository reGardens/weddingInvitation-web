import React, { useEffect, useState } from "react";

// images
import ring from "../assets/images/personalia.jpg";
import ButtonGradient from "../componenets/ButtonGradient";
import { DaunBottomLeft, DaunBottomRight, DaunTopLeft, DauntTopRight } from "../componenets/Daun";

const Amplop = () => {
    const [showPopup, setShowPopup] = useState(true)

    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden"
        }
    }, []);

    const buttonHandler = () => {
        const amplop = document.querySelector('.customSwipeAmplop');
        amplop.style.transform = 'translateY(-100%)';
        document.body.style.overflow = "scroll"
        setShowPopup(false)
    }

    return (
        <>
            {
                showPopup && (
                    <div className="fixed z-[9999] transition duration-500 ease-in-out delay-75 customSwipeAmplop w-full h-full mx-auto bg-slate-50 flex flex-col justify-center items-center !overflow-hidden">
                        <DaunTopLeft />
                        <DauntTopRight />
                        <DaunBottomLeft />
                        <DaunBottomRight />

                        <div className="border-2 border-black rounded-full">
                            <div className="rounded-full border-2 overflow-hidden border-transparent object-cover">
                                <img
                                    src={ring}
                                    className="img w-[130px] h-[130px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-4xl">
                            Him & Her
                        </div>

                        <div className="text-center personal-name-style text-3xl p-5 font-normal">
                            Wedding Apps
                        </div>

                        <ButtonGradient onClick={buttonHandler} />
                    </div>
                )
            }

        </>
    );
};

export default Amplop;
