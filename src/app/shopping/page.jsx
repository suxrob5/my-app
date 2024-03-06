/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import X from "../../assets/x.svg";
import Image from "next/image";
import ShoppingHeader from "@/components/Shopping/ShoppingHeader";

import Like from "../../assets/like.svg";
const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = Object.keys(localStorage);
        const favoriteItems = keys.map((key) => {
          if (key.startsWith("likeData_")) {
            return JSON.parse(localStorage.getItem(key));
          }
          return null;
        });
        setFavorites(favoriteItems.filter((item) => item !== null));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const removeFromFavorites = (itemId) => {
    localStorage.removeItem(`likeData_${itemId}`);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== itemId)
    );
  };
  const count = "10,000";
  return (
    <>
      <div>
        {/* Header */}
        <ShoppingHeader />

        {/* main */}
        <main className="w-[95%] max-w-[1519px] mx-auto border">
          <div className="grid grid-cols-1 mx-auto gap-10 w-[95%] border">
            {favorites.map((item) => (
              <div key={item.id} className="w-[100%]">
                <div className="p-7  border flex items-center justify-between">
                  <div>
                    <div className="flex items-center justify-start">
                      <img
                        src={item.images.src}
                        alt="imgsrc"
                        className="w-[86px] h-[86px] m-3"
                      />
                      <div>
                        <h1 className="text-2xl px-2">{item.title}</h1>
                        <p className="px-2 text-[18px] font-semibold text-[#686868FF]">
                          rate:{item.rating.rate}
                        </p>
                        <h1 className="text-red-500 text-[18px] px-2">
                          {item.price}
                        </h1>
                      </div>
                    </div>
                    <div className="flex">
                      <button className="text-[#ED165FFF] font-[700] text-[15px] flex items-center">
                        <Image src={Like} alt="x" className="mx-2 w-[19px]" />
                        MOVE TO FAVORITES
                      </button>
                      <button
                        onClick={() => removeFromFavorites(item.id)}
                        className="text-[#ED165FFF] font-[700] text-[15px] flex items-center ml-10"
                      >
                        <Image src={X} alt="x" className="mx-2" />
                        REMOVE
                      </button>
                    </div>
                  </div>
                  {/*  2*/}
                  <div>
                    <div>
                      <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                  {/* 3 */}
                  <div>
                    <div>
                      <h1 className="text-2xl">₦{count}</h1>
                    </div>
                  </div>
                  {/* 4 */}
                  <div>
                    <div>
                      <h1 className="text-2xl">₦{count}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default MyFavorites;
