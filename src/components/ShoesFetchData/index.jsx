/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Heart from "../../assets/BHeart.svg";
import HeartRed from "../../assets/heartRed.svg";
import ShopPlus from "../../assets/shopPlus.svg";
import Image from "next/image";
import classNames from "classnames";
import { ShoesData } from "../ShoesData";

const ShoesFetchData = ({ data, setData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("Most popular");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(ShoesData);
        setIsLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modalClasses = classNames("absolute p-4", {
    hidden: !isHovered,
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const handleSort = (sortValue) => {
    setSort(sortValue);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return (
      <div className="flex h-[100vh] items-center justify-center">
        <h1 className="text-[50px] font-semibold text-blue-500">Loading...</h1>
      </div>
    );
  }

  let filteredData = ShoesData;
  if (filter !== "all") {
    filteredData = ShoesData.filter((item) => item.category === filter);
    console.log(filteredData);
  }

  if (sort === "Most popular") {
    filteredData.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sort === "Best Selling") {
    filteredData.sort((a, b) => b.rating.count - a.rating.count);
  } else if (sort == "Price: High to Low") {
    filteredData.sort((a, b) => b.prices - a.prices);
  } else if (sort == "Price: Low to High") {
    filteredData.sort((a, b) => a.prices - b.prices);
  }
  return (
    <>
      <div className="mx-auto flex w-[95%] items-center justify-between -mt-28">
        <h1 className="text-white">.</h1>
        <div>
          <div className="col-span-2">
            <div className="flex justify-end items-center mb-5 space-x-3">
              <span className="text-lg">Sort by:</span>
              <select
                className="border-[2px] border-black px-5 py-3 text-xl font-[500]"
                value={sort}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="Most popular">Most popular</option>
                <option value="Best Selling">Best Selling</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Price: Low to High">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      
      <div className="mx-auto grid w-[90%] grid-cols-3 justify-items-center gap-20 mt-20">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className=" w-[300px] cursor-pointer transition hover:shadow-2xl"
            >
              <div className="flex h-full max-w-[] flex-col items-center">
                <div className="relative scale-95 hover:scale-100 hover:bg-gray-500 hover:shadow-2xl">
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={item.images.src}
                      alt="Kart rasmi"
                      className="h-full w-full object-cover transition duration-300 ease-in-out"
                      onClick={() => handleImageClick(item.id)}
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50"></div>
                  </div>
                </div>
                <h1 className="mt-5 text-center text-2xl">{item.title}</h1>
                <h1 className="mt-2 text-center text-2xl pb-5">{item.price}</h1>
                <div
                  className={modalClasses}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center justify-center p-5 mt-[100px]">
                    <div className="border bg-white p-5">
                      <button onClick={handleFavoriteClick}>
                        <Image
                          src={isFavorite ? HeartRed : Heart}
                          alt="Red Heart"
                          className="w-[20px]"
                        />
                      </button>
                    </div>
                  </div>
                  <button className="flex items-center justify-between rounded-sm border bg-white px-5 py-3 font-semibold active:-skew-x-[12deg]">
                    ADD TO CARD
                    <Image src={ShopPlus} alt="salom" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShoesFetchData;
