// "use strict";
"use client";
import ClothesBtn from "@/components/ClothesBtn";
import ClothesCatecorys from "@/components/ClothesCatecorys";
import ClothesColors from "@/components/ClothesColor";
import { ClothesData } from "@/components/ClothesData";
import ClothesFetchData from "@/components/ClothesFetchData";
import ClothesHeader from "@/components/ClothesHeader";
import ClothesPrice from "@/components/ClothesPrice";
import ClothesSec from "@/components/ClothesSec";
import End from "@/components/EndPages";
import React, { useState } from "react";

const Clothes = () => {
    const [searchVal, setSearchVal] = useState();
    const [data, setData] = useState(null);

    const handleSearch = (searchValue) => {
      setSearchVal(searchValue);
      const searchResults = ClothesData.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData(searchResults);
    };
  return (
    <>
      <div id="main">
        <ClothesHeader
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          handleSearch={handleSearch}
        />
      </div>
      <h1 className="text-white">.</h1>
      <main className="mt-36">
        <header className="">
          <div>
            <h1 className="m-10 text-4xl font-semibold">CLOTHES</h1>
          </div>
        </header>
        <div className="mx-auto flex w-[95%] items-center justify-between">
          <div>
            <h1 className="text-2xl font-[500]">CATEGORY</h1>
          </div>
        </div>
        <div className="mx-auto mt-5 flex w-[95%] justify-between">
          <div className="w-[20%]">
            <ClothesCatecorys />
            <ClothesBtn />
            <ClothesColors />
            <ClothesPrice />
          </div>
          <div className="w-[80%]">
            <ClothesFetchData data={data} setData={setData} />
          </div>
        </div>
        <ClothesSec />
      </main>
      <End />
    </>
  );
};

export default Clothes;
