import React, { useState } from "react";

const ClothesPrice = () => {
  const [item, setItem] = useState(false);
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  ///input v
 const [dollars, setDollars] = useState("");
 const [naira, setNaira] = useState("");


  const handleApply = () => {
    if (dollars !== "" && naira !== "") {
      alert(`Dollars: $${dollars}\nNaira: ₦${naira}`);
    } else {
      alert("Please enter a valid input");
    }
  };

  const handleClear = () => {
    setItem(false);
    setItem1(false);
    setItem2(false);
    setItem3(false);
  };

  const handleChecket = () => {
    setItem(!item);
  };
  const handleChecket1 = () => {
    setItem1(!item1);
  };
  const handleChecket2 = () => {
    setItem2(!item2);
  };
  const handleChecket3 = () => {
    setItem3(!item3);
  };












    const handleDollarsChange = (event) => {
      setDollars(event.target.value);
      const convertedNaira = parseFloat(event.target.value) * 1578.06;
      setNaira(convertedNaira.toFixed(2));
    };


    const handleNairaChange = (event) => {
      setNaira(event.target.value);
      const convertedDollars = parseFloat(event.target.value) / 1578.06;
      setDollars(convertedDollars.toFixed(2));
    };
  return (
    <div className="mt-5">
      <div onClick={handleClear} className="flex items-center justify-between">
        <h1 className="text-[18px font-[600]">PRICE</h1>
        <div className="flex cursor-pointer items-center justify-between p-5 text-[14px] font-[600] text-[#C4C4C4FF]">
          <h1 className="text-[14px] font-[600]">Clear</h1>
          <button>
            <span className="text-white">...</span>x
          </button>
        </div>
      </div>
      {/* */}
      <main className="grid grid-cols-4 gap-1">
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            className="w-[40px] h-[40px]"
            onChange={handleChecket}
            checked={item}
          />
          <h1 className="text-xl m-3">₦0</h1>
          <h1 className="text-xl m-3">₦10,000</h1>
        </div>
        <h1 className="text-white">.</h1>
        <h1 className="text-white">.</h1>
        <h1 className="text-white">.</h1>
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            className="w-[40px] h-[40px]"
            onChange={handleChecket1}
            checked={item1}
          />
          <h1 className="text-xl m-3">₦0</h1>
          <h1 className="text-xl m-3">₦10,000</h1>
        </div>
        <h1 className="text-white">.</h1>
        <h1 className="text-white">.</h1>
        <h1 className="text-white">.</h1>
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            className="w-[40px] h-[40px]"
            onChange={handleChecket2}
            checked={item2}
          />
          <h1 className="text-xl m-3">₦0</h1>
          <h1 className="text-xl m-3">₦10,000</h1>
        </div>
        <h1 className="text-white">.</h1>
        <h1 className="text-white">.</h1>
        <h1 className="text-white">.</h1>
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            className="w-[40px] h-[40px]"
            onChange={handleChecket3}
            checked={item3}
          />
          <h1 className="text-xl m-3">₦0</h1>
          <h1 className="text-xl m-3">₦10,000</h1>
        </div>
      </main>
      <div className="flex">
        <div className="border border-black mr-2">
          <span>₦</span>
          <input
            type="number"
            className="outline-none w-[35px]"
            value={naira}
            onChange={handleNairaChange}
          />
        </div>
        <p>to</p>
        <div className="border border-black mx-2">
          <span>$</span>
          <input
            type="number"
            className="outline-none w-[35px]"
            value={dollars}
            onChange={handleDollarsChange}
          />
        </div>
        <button
          className="text-white bg-[#ED165FFF] rounded px-3 mx-3"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ClothesPrice;
