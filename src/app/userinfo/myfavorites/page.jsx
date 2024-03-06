/* eslint-disable @next/next/no-img-element */
"use client";
import { AaccessoriesData } from "@/components/AaccessoriesData";
import AccountDashboardSidebar from "@/components/AccountDashboardSidebar";
import UserInfoHeader from "@/components/UserInfoHeader";
import { useEffect, useState } from "react";
import X from "../../../assets/x.svg";
import Image from "next/image";

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
  return (
    <>
      <div>
        <UserInfoHeader />

        {/* main */}
        <main className="w-[90%] mx-auto h-screen flex items-center justify-between">
          <div className="shadow-xl w-[20%] h-screen">
            <AccountDashboardSidebar />
          </div>
          <div className="border w-[78%] h-screen">
            <div>
              <div>
                <h1 className="text-[24px] font-[400] m-5">My Favorites</h1>
              </div>
              <main>
                <div className="">
                  <div className="grid grid-cols-2 mx-auto w-[90%] gap-10">
                    {favorites.map((item) => (
                      <div
                        key={item.id}
                        className="w-[410px] h-[261px] shadow-xl"
                      >
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
                        <div className="flex items-center justify-between p-10">
                          <button className="text-white bg-[#ED165FFF] rounded-md font-[700] text-[18px] px-6 py-3">
                            BUY NOW
                          </button>
                          <button
                            onClick={() => removeFromFavorites(item.id)}
                            className="text-[#ED165FFF] font-[700] text-[18px] flex items-center"
                          >
                            <Image src={X} alt="x" className="mx-2" />
                            REMOVE
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MyFavorites;
