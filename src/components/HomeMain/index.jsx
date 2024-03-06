import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SafariBig from "../../assets/safaribiglogo.svg";
import Woman from "../../assets/woman.svg";
import Vector from "../../assets/vector.svg";

const HomeMain = () => {
  return (
    <div
      className="home flex h-screen w-[100%] items-center justify-center"
      id="main"
    >
      <Image src={SafariBig} alt="fon" className="w-[50%]" />
      <Image src={Woman} alt="fon" className="absolute w-[35%] -mt-10" />
      <div className="absolute bottom-0">
        <h1 className="text-center text-[30px] font-[600] text-white">
          Explore our collection
        </h1>{" "}
        <br />
        <div className="flex items-center justify-center">
          <Link href={"/#names"}>
            <Image
              src={Vector}
              alt="vector"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeMain