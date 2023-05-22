import React from "react";

const ButtonGradient = ({onClick}) => {
    const ok = () => {
    }
    return <div className="flex text-white" onClick={onClick}>
        <button onClick={ok} className="mx-auto tracking-widest bg-gradient-to-r from-[#677081] to-[#979faf] px-7 py-2 font-semibold let">
            Buka Surat
        </button>
    </div>;
};

export default ButtonGradient;
