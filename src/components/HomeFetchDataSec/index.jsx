/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Heart from "../../assets/BHeart.svg";
import HeartRed from "../../assets/heartRed.svg";
import ShopPlus from "../../assets/shopPlus.svg";
import Image from "next/image";
import classNames from "classnames";

const HomeFetchDataSec = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imgUlr = useRef();
  const [item, setItem] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const modalClasses = classNames("absolute p-4", {
    hidden: !isHovered,
  });
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[100vh] items-center justify-center">
        <h1 className="text-[50px] font-semibold text-blue-500">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="mx-auto grid w-[90%] grid-cols-4 justify-items-center gap-20">
      {data &&
        data.map((item) => (
          <div
          key={item.id}
          className="h-[600px] w-[300px] cursor-pointer transition hover:shadow-2xl"
          >
            <div className="flex h-full max-w-[] flex-col items-center">
              <div className="relative scale-95 hover:scale-100 hover:bg-gray-500 hover:shadow-2xl">
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="h-full w-full object-cover transition duration-300 ease-in-out">
                    <img
                      src={item.image}
                      alt="Kart rasmi"
                      onClick={() => handleImageClick(item.id)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50"></div>
                </div>
              </div>
              <h1 className="mt-5 text-center text-2xl">{item.title}</h1>
              <h1 className="mt-2 text-center text-2xl">$ {item.price}</h1>
              <div
                className={modalClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-center p-5">
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
  );
};

export default HomeFetchDataSec;
