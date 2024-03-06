import Link from 'next/link';
import React from 'react'

const ClothesCatecorys = () => {
  return (
    <div>
      {" "}
      <ul className=" text-lg">
        <li className="p-1">
          <Link href= {"/clothes"}>All</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Dresses</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Denim</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Jeans</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Jumpsuits</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Tops</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Jackets and coats</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Pants</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Shorts</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Skirts</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Loungerie & underwear</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Leather</Link>
        </li>
        <li className="p-1">
          <Link href= {"/clothes"}>Sweaters & knits</Link>
        </li>
      </ul>
    </div>
  );
}

export default ClothesCatecorys