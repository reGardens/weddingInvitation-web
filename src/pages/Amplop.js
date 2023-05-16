import React from "react";

// images
import ring from "../assets/images/personalia.jpg";
import daunBottom01 from "../assets/images/daun-bottom-01.png";
import daunBottom02 from "../assets/images/daun-bottom-02.png";
import daunBottom03 from "../assets/images/daun-bottom-03.png";
import daunBottom04 from "../assets/images/daun-bottom-04.png";
import daunBottom05 from "../assets/images/daun-bottom-05.png";
import ButtonGradientGreen from "../componenets/ButtonGradientGreen";
import { DaunBottomLeft, DaunBottomRight, DaunTopLeft, DauntTopRight } from "../componenets/Daun";

const Dahsboard = () => {
    const buttonHandler = () => {
        const amplop = document.querySelector('.customSwipeAmplop');
        amplop.style.transform = 'translateY(-100%)';
    }

    return (
        <div className="fixed z-[999] transition duration-500 ease-in-out delay-75 customSwipeAmplop w-[360px] h-screen mx-auto bg-slate-50 flex flex-col justify-center items-center overflow-hidden">
            <DaunTopLeft />
            <DauntTopRight />
            <DaunBottomLeft />
            <DaunBottomRight />

            <div className="border-2 border-black rounded-full">
                <div className="rounded-full border-2 overflow-hidden border-transparent object-cover">
                    <img
                        src={ring}
                        className="w-[130px] h-[130px] object-cover"
                    />
                </div>
            </div>

            <div className="text-4xl">
                Him & Her
            </div>

            <div className="text-center personal-name-style text-3xl p-5 font-normal">
                Wedding Apps
            </div>

            <ButtonGradientGreen onClick={buttonHandler} />
        </div>
    );
};

export default Dahsboard;
