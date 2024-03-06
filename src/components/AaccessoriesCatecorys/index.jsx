"use client";
import Link from "next/link";

const AaccessoriesCatecorys = () => {
  return (
    <div>
      {" "}
      <ul className=" text-lg">
        <li className="p-1">
          <Link href={"/shoes"}>All</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Dresses</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Denim</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Jeans</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Jumpsuits</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Tops</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Jackets and coats</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Pants</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Shorts</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Skirts</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Loungerie & underwear</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Leather</Link>
        </li>
        <li className="p-1">
          <Link href={"/shoes"}>Sweaters & knits</Link>
        </li>
      </ul>
    </div>
  );
};

export default AaccessoriesCatecorys;
