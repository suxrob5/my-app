import Link from "next/link";
import React from "react";
import Safari from "../../assets/safari.svg";
import Facebook from "../../assets/facebook.svg";
import Twitteter from "../../assets/twitter.svg";
import Insta from "../../assets/insta.svg";
import Image from "next/image";

const End = () => {
  return (
    <div className="bg-[#F5F5F5FF]">
      <div className="flex items-center justify-between p-10 py-20">
        <div>
          <Image src={Safari} alt="safari" />
        </div>
        <ul>
          <li className="fontfont-[500] p-2 text-xl font-[500]">
            <Link href={"/#main"}>About Us</Link>
          </li>
          <li className="fontfont-[500] p-2 text-xl font-[500]">
            <Link href={"/#main"}>Contats</Link>
          </li>
          <li className="fontfont-[500] p-2 text-xl font-[500]">
            <Link href={"/#main"}>Terms & Conditions</Link>
          </li>
        </ul>
        {/*  */}
        <ul>
          <li className="flex items-center justify-start">
            <div className="px-2">
              <Image src={Facebook} alt="Facebook" />
            </div>
            <Link href={"/#main"} className="p-2 text-xl font-[500]">
              Facebook
            </Link>
          </li>
          <li className="flex items-center justify-start">
            <div className="px-2">
              <Image src={Twitteter} alt="Twitteter" />
            </div>
            <Link href={"/#main"} className="p-2 text-xl font-[500]">
              Twitter
            </Link>
          </li>
          <li className="flex items-center justify-start">
            <div className="px-2">
              <Image src={Insta} alt="Insta" />
            </div>
            <Link href={"/#main"} className="p-2 text-xl font-[500]">
              Instagram
            </Link>
          </li>
        </ul>

        <div>
          <label htmlFor="inputPl"></label>
          <div className="flex bg-[#ED165FFF]">
            <input
              type="text"
              placeholder="Enter your email"
              id="inputPl"
              className="rounded-l border border-[#ED165FFF] px-6 py-3 outline-[#ED165FFF] focus:rounded-none"
            />
            <button className="rounded-r border border-[#ED165FFF] bg-[#ED165FFF] px-5 py-3 text-white">
              OK
            </button>
          </div>
        </div>
        <ul>
          <li className="p-2 text-xl font-[500]">
            <Link href={"#"}>497 Evergreen Rd. Roseville, CA 95673</Link>
          </li>
          <li className="p-2 text-xl font-[500]">
            <Link href="#">+44345678903</Link>
          </li>
          <li className="p-2 text-xl font-[500]">
            <Link href={"#"}>adobexd@mail.com</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default End;
