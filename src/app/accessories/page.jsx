"use client";
import AaccessoriesBtn from "@/components/AaccessoriesBtns";
import AaccessoriesCatecorys from "@/components/AaccessoriesCatecorys";
import AaccessoriesColors from "@/components/AaccessoriesColors";
import { AaccessoriesData } from "@/components/AaccessoriesData";
import AaccessoriesFetchData from "@/components/AaccessoriesFetchData";
import AaccessoriesPrice from "@/components/AaccessoriesPrice";
import AaccessoriesSec from "@/components/AaccessoriesSec";
import AccessoriesHeader from "@/components/AccessoriesHeader";
import End from "@/components/EndPages";
import { useState } from "react";

const Accessories = () => {
  const [searchVal, setSearchVal] = useState();
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);

  const handleSearch = (searchValue) => {
    setSearchVal(searchValue);
    const searchResults = AaccessoriesData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(searchResults);
  };
  return (
    <div id="main">
      <AccessoriesHeader
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        handleSearch={handleSearch}
      />
      <h1>.</h1>
      <main className="mt-36">
        <header className="">
          <div>
            <h1 className="m-10 text-4xl font-semibold">ACCESSORIES</h1>
          </div>
        </header>
        <div className="mx-auto flex w-[95%] items-center justify-between">
          <div>
            <h1 className="text-2xl font-[500]">CATEGORY</h1>
          </div>
        </div>
        <div className="mx-auto mt-5 flex w-[95%] justify-between">
          <div className="w-[20%]">
            <AaccessoriesCatecorys />
            <AaccessoriesBtn />
            <AaccessoriesColors />
            <AaccessoriesPrice />
          </div>
          <div className="w-[80%]">
            <AaccessoriesFetchData
              data={data}
              setData={setData}
              item={item}
              setItem={setItem}
            />
          </div>
        </div>
        <AaccessoriesSec />
      </main>
      <End />
    </div>
  );
};

export default Accessories;
