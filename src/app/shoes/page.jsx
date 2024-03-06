"use client";
import End from "@/components/EndPages";
import ShoesBtns from "@/components/ShoesBtns";
import ShoesCatecorys from "@/components/ShoesCatecorys";
import ShoesColors from "@/components/ShoesColors";
import { ShoesData } from "@/components/ShoesData";
import ShoesFetchData from "@/components/ShoesFetchData";
import ShoesHeader from "@/components/ShoesHeader";
import ShoesPrice from "@/components/ShoesPrice";
import ShoesSec from "@/components/ShoesSec";
import React, { useState } from "react";

const Shoes = () => {
  const [searchVal, setSearchVal] = useState();
  const [data, setData] = useState(null);

  const handleSearch = (searchValue) => {
    setSearchVal(searchValue);
    const searchResults = ShoesData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(searchResults);
  };
  return (
    <div>
      <ShoesHeader
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        handleSearch={handleSearch}
        id="main"
      />
      <div className="-mt-10"></div>
      <h1 className="text-white">.</h1>
      <main className="mt-36">
        <header>
          <div>
            <h1 className="m-10 text-4xl font-semibold">SHOES</h1>
          </div>
        </header>

        {/* elemnts */}
        <div className="mx-auto flex w-[95%] items-center justify-between">
          <div>
            <h1 className="text-2xl font-[500]">CATEGORY</h1>
          </div>
        </div>

        <div className="flex items-center w-[95%] mx-auto justify-between py-5">
          <div className="border w-[20%]"></div>
          <div className="border w-[75%]"></div>
        </div>
        <div className="mx-auto mt-5 flex w-[95%] justify-between">
          <div className="w-[20%]">
            {/* Shoes Catecorys */}

            <ShoesCatecorys />

            {/* Shoes buttons */}

            <ShoesBtns />

            {/* Shoes Colors */}

            <ShoesColors />

            {/* Shoes Price */}

            <ShoesPrice />
            {/* end */}
          </div>
          <div className="w-[80%]">
            {/* Fetch Data */}

            <ShoesFetchData data={data} setData={setData} />
          </div>
        </div>
        {/* Shoes Sec */}

        <ShoesSec />
      </main>
      <End />
    </div>
  );
};

export default Shoes;
