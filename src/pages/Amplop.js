import React from "react";

// images
import ring from "../assets/images/personalia.jpg";
import daunAtas01 from "../assets/images/daun-atas-01.png";
import daunAtas02 from "../assets/images/daun-atas-02.png";
import daunAtas03 from "../assets/images/daun-atas-03.png";
import daunBottom01 from "../assets/images/daun-bottom-01.png";
import daunBottom02 from "../assets/images/daun-bottom-02.png";
import daunBottom03 from "../assets/images/daun-bottom-03.png";
import daunBottom04 from "../assets/images/daun-bottom-04.png";
import daunBottom05 from "../assets/images/daun-bottom-05.png";
import ButtonGradientGreen from "../componenets/ButtonGradientGreen";

const Dahsboard = () => {
    const buttonHandler = () => {
        const amplop = document.querySelector('.customSwipeAmplop');
        amplop.style.transform = 'translateY(-100%)';
    }

    return (
        <div className="absolute transition duration-500 ease-in-out delay-75 customSwipeAmplop w-[360px] !mx-auto bg-slate-50 h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* daun top left */}
            <div className="absolute -top-2 left-0 animate-spinTopLeft01">
                <img src={daunAtas01} className="" />
            </div>
            <div className="absolute top-0 -left-2 z-10 animate-spinTopLeft02">
                <img src={daunAtas02} className="w-[130px]" />
            </div>
            <div className="absolute top-3 -left-1 animate-spinTopLeft03">
                <img src={daunAtas03} className="" />
            </div>
            {/* daun top left */}

            {/* daun top right */}
            <div className="absolute top-16 right-0 animate-spinTopRight01">
                <img src={daunBottom05} className="transform -rotate-[60deg]" />
            </div>
            <div className="absolute top-0 right-0 animate-spinTopRight02 z-10">
                <img src={daunBottom03} className="transform -rotate-[90deg]" />
            </div>
            <div className="absolute top-3 right-9 animate-spinTopRight03">
                <img src={daunBottom05} className="transform -rotate-[10deg] -scale-y-[1]" />
            </div>
            {/* daun top right */}

            {/* daun bottom left */}
            <div className="absolute bottom-1 left-2 animate-spinBottomLeft01">
                <img src={daunBottom01} className="transform rotate-[0deg] -scale-x-100" />
            </div>
            <div className="absolute -bottom-3 left-6 animate-spinBottomLeft02">
                <img src={daunBottom01} className="transform rotate-[90deg]" />
            </div>
            {/* daun bottom left */}

            {/* daun bottom right */}
            <div className="absolute -bottom-2 -right-2 animate-spinBottomRight02">
                <img src={daunBottom02} className="" />
            </div>
            <div className="absolute bottom-0 right-0 z-10 animate-spinBottomRight03">
                <img src={daunBottom03} className="" />
            </div>
            <div className="absolute -bottom-4 right-7 animate-spinBottomRight04">
                <img src={daunBottom04} className="" />
            </div>
            {/* daun bottom right */}

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
