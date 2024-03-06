/* eslint-disable @next/next/no-img-element */
"use client";
"use require";
"use strict";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
//images
import Red from "../../assets/redfon.png";
import User from "../../assets/user.svg";
import oqUser from "../../assets/oqUser.svg";
import Book from "../../assets/book.svg";
import oqBook from "../../assets/oqBook.svg";
import Gift from "../../assets/gift.svg";
import oqGift from "../../assets/oqGift.svg";
import Like from "../../assets/heart.svg";
import oqLike from "../../assets/oqLike.svg";

const AccountDashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="mt-10">
        <div>
          <h1 className="text-[18px] font-[800] text-center p-10">
            ACCOUNT DASHBOARD
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1">
          {pathname === "/userinfo" ? (
            <div className="mx-auto grid -mt-10">
              <div className="flex items-center justify-center">
                <Image src={Red} alt="red" className="w-[100%]" />
                <Link
                  href="/userinfo"
                  className="text-[14px] font-[700] text-white absolute pl-5"
                >
                  <Image
                    src={oqUser}
                    alt="img"
                    className="w-[18px] absolute -ml-10"
                  />
                  Account Information
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto grid">
              <div className="flex items-center justify-center">
                <Link
                  href="/userinfo"
                  className="text-[14px] font-[700] text-center p-10 absolute"
                >
                  <Image
                    src={User}
                    alt="img"
                    className="w-[18px] absolute -ml-10"
                  />
                  Account Information
                </Link>
              </div>
            </div>
          )}
          <h1 className="text-white">.</h1>
          {/* link 2 */}

          {pathname === "/userinfo/addressbook" ? (
            <div className="mx-auto grid p-2 ">
              <div className="flex items-center justify-center">
                <Image src={Red} alt="red" className="w-[100%]" />
                <Link
                  href="/userinfo/addressbook"
                  className="text-[14px] font-[700] text-white absolute pl-5"
                >
                  <Image
                    src={oqBook}
                    alt="img"
                    className="w-[18px] absolute -ml-10"
                  />
                  Address Book
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto grid mt-10">
              <div className="flex items-center justify-center">
                <Link
                  href="/userinfo/addressbook"
                  className="text-[14px] font-[700] text-center p-5 absolute"
                >
                  <Image
                    src={Book}
                    alt="img"
                    className="w-[15px] absolute -ml-10"
                  />
                  Address Book
                </Link>
              </div>
            </div>
          )}
          {/* link3 */}
          <h1 className="text-white">.</h1>

          {pathname === "/userinfo/myorder" ? (
            <div className="mx-auto grid">
              <div className="flex items-center justify-center">
                <Image src={Red} alt="red" className="w-[100%]" />
                <Link
                  href="/userinfo/myorder"
                  className="text-[14px] font-[700] text-white absolute pl-5"
                >
                  <Image
                    src={oqGift}
                    alt="img"
                    className="w-[18px] absolute -ml-10"
                  />
                  My Orders
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto grid mt-10">
              <div className="flex items-center justify-center">
                <Link
                  href="/userinfo/myorder"
                  className="text-[14px] font-[700] text-center p-10 absolute"
                >
                  <Image
                    src={Gift}
                    alt="img"
                    className="w-[18px] absolute -ml-10 "
                  />
                  My Orders
                </Link>
              </div>
            </div>
          )}

          {/* link 4 */}
          <h1 className="text-white">.</h1>

          {pathname === "/userinfo/myfavorites" ? (
            <div className="mx-auto grid">
              <div className="flex items-center justify-center">
                <Image src={Red} alt="red" className="w-[100%]" />
                <Link
                  href="/userinfo/myfavorites"
                  className="text-[14px] font-[700] text-white absolute pl-5"
                >
                  <Image
                    src={oqLike}
                    alt="img"
                    className="w-[18px] absolute -ml-10"
                  />
                  My Favorites
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto grid mt-10">
              <div className="flex items-center justify-center">
                <Link
                  href="/userinfo/myfavorites"
                  className="text-[14px] font-[700] text-center p-10 absolute"
                >
                  <Image
                    src={Like}
                    alt="img"
                    className="w-[18px] absolute -ml-10 "
                  />
                  My Favorites
                </Link>
              </div>
            </div>
          )}
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default AccountDashboardSidebar;
