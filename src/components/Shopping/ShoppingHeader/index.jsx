"use client";
import Link from "next/link";
import Safari from "../../../../src/assets/safari.svg";
import Search from "../../../../src/assets/search.svg";
import User from "../../../../src/assets/user.svg";
import UserRed from "../../../../src/assets/userRed.svg";
import Shop from "../../../../src/assets/shop.svg";
import ShopRed from "../../../../src/assets/shopRed.svg";
import Heart from "../../../../src/assets/heart.svg";
import HeartRed from "../../../../src/assets/heartRed.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const ShoppingHeader = ({ searchVal, setSearchVal, handleSearch }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="w-[100%] max-w-[1519px] border bg-gray-100">
        <div className=" mx-auto flex w-[80%] items-center justify-between py-5">
          <nav className="flex">
            <ul>
              <li className="text-2xl font-semibold">
                <Link className="mx-3 px-3 py-3" href="/" legacyBehavior>
                  <a
                    className={`mx-3 px-3 py-3
                      ${
                        pathname === "/"
                          ? "border-b-2 border-[#ED165FFF] text-[#ED165FFF]"
                          : "text-black"
                      }
                    `}
                  >
                    Home
                  </a>
                </Link>
                <Link className="mx-3 px-3 py-3" href="/clothes" legacyBehavior>
                  <a
                    className={`mx-3 px-3 py-3
                     ${
                       pathname === "/clothes"
                         ? "border-b-2 border-[#ED165FFF] text-[#ED165FFF]"
                         : "text-black"
                     }
                   `}
                  >
                    Clothes
                  </a>
                </Link>
                <Link className="mx-3 px-3 py-3" href="/shoes" legacyBehavior>
                  <a
                    className={`mx-3 px-3 py-3
                      ${
                        pathname === "/shoes"
                          ? "border-b-2 border-[#ED165FFF] text-[#ED165FFF]"
                          : "text-black"
                      }
                    `}
                  >
                    Shoes
                  </a>
                </Link>
                <Link
                  className="mx-3 px-3 py-3"
                  href="/accessories"
                  legacyBehavior
                >
                  <a
                    className={`mx-3 px-3 py-3
                      ${
                        pathname === "/accessories"
                          ? "border-b-2 border-[#ED165FFF] text-[#ED165FFF]"
                          : "text-black"
                      }
                    `}
                  >
                    Accessories
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={"/"}>
            <Image src={Safari} alt="icon" className="" />
          </Link>
          <div>
            <input
              type="search"
              placeholder="Search..."
              defaultValue={searchVal}
              onChange={(e) => handleSearch(e.target.value)}
              className="border-b bg-gray-100 px-5 focus:outline-[#ED165FFF] py-3"
            />
            <button className="px-3 ">
              <Image src={Search} alt="icon" className="w-[15px]" />
            </button>
            <button className="px-3" onClick={() => router.push("userinfo")}>
              <Image
                src={pathname == "/userinfo" ? UserRed : User}
                alt="icon"
                className="w-[15px]"
              />
            </button>
            <button className="px-3" onClick={() => router.push("/shopping")}>
              <Image
                src={pathname == "/shopping" ? ShopRed : Shop}
                alt="icon"
                className="w-[15px]"
              />
            </button>
            <button
              className="px-3"
              onClick={() => router.push("/userinfo/myfavorites")}
            >
              <Image
                src={pathname == "/userinfo/myfavorites" ? HeartRed : Heart}
                alt="icon"
                className="w-[15px]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingHeader;
