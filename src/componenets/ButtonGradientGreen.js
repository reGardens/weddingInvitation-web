import React from "react";

const ButtonGradientGreen = ({onClick}) => {
    const ok = () => {
    }
    return <div className="flex" onClick={onClick}>
        <button onClick={ok} className="mx-auto bg-gradient-to-r from-[#D0D767] to-[#74B62E] px-7 py-2 font-semibold let">
            Buka Surat
        </button>
    </div>;
};

export default ButtonGradientGreen;
