import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tepa from "../../assets/tepa.svg";
const Section = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <h1>.</h1>
      <div className="flex items-center justify-between">
        <Link
          href={"/home/1"}
          className="m-5 border-b-2 border-red-500 p-5 px-10 text-xl hover:bg-gray-100"
        >
          1
        </Link>
        <Link
          href={"/home/2"}
          className="m-5 border-b-2 p-5 px-10 text-xl hover:bg-gray-100"
        >
          2
        </Link>
      </div>
      <Link href={"/#main"}>
        <div className="flex cursor-pointer items-center justify-center rounded border-2 p-8 hover:scale-110 hover:bg-gray-100">
          <Image src={Tepa} alt="tepaga" />
        </div>
      </Link>
    </div>
  );
};

export default Section;
