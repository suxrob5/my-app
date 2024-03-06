"use client"
import { useState } from "react";

const ShoesBtns = () => {
  const [btnColors, setBtnColors] = useState({});

  const handleBtn = (btnName) => {
    if (btnName === "clear") {
      setBtnColors({});
    } else {
      setBtnColors((prevBtnColors) => ({
        ...prevBtnColors,
        [btnName]:
          prevBtnColors[btnName] === "bg-[#ED165FFF]"
            ? "bg-white"
            : "bg-[#ED165FFF] text-white",
      }));
    }
  };

  const sizes = [
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
  ];

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[18px font-[600]">SIZE</h1>
          <div
            onClick={() => handleBtn("clear")}
            className="flex cursor-pointer items-center justify-between p-5 text-[14px] font-[600] text-[#C4C4C4FF]"
          >
            <h1 className="text-[14px] font-[600]">Clear</h1>
            <button>
              <span className="text-white">...</span>x
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {sizes.map((size) => (
          <button
            key={size}
            className={`rounded-lg border border-black text-xl px-6 py-4 hover:g-[#ED165FFF] transition-none ${btnColors[size]}`}
            onClick={() => handleBtn(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShoesBtns;
