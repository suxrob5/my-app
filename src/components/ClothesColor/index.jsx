import React from 'react'

const ClothesColors = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[18px font-[600]">COLORS</h1>
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
      {/* */}
      <main className="grid grid-cols-3 gap-2">
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-[#F3ECDBFF]"></div>
          <span className="text-xl ml-3">Beige</span>
        </button>
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-[#465BA3FF]"></div>
          <span className="text-xl ml-3">Blue</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-black"></div>
          <span className="text-xl ml-3">Black</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-orange-500"></div>
          <span className="text-xl ml-3">Orange</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-green-500"></div>
          <span className="text-xl ml-3">Green</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-[#665147FF]"></div>
          <span className="text-xl ml-3">Brown</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-purple-600"></div>
          <span className="text-xl ml-3">Purple</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-[#FDD681FF]"></div>
          <span className="text-xl ml-3">Gold</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-gray-300"></div>
          <span className="text-xl ml-3">Taupe</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-white border"></div>
          <span className="text-xl ml-3">White</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-pink-600"></div>
          <span className="text-xl ml-3">Pink</span>
        </button>{" "}
        <button className="flex items-center justify-start">
          <div className="w-[30px] h-[30px] bg-red-600"></div>
          <span className="text-xl ml-3">Red</span>
        </button>
      </main>
    </div>
  );
}

export default ClothesColors