import Image from "next/image";
import "./carousel.css";
import Fon from "../../assets/fon.png";
import Vector from "../../assets/vector.svg";
import Link from "next/link";

const Carousel = () => {
  return (
    <>
      <div className="slider mt-24 relative">
        <div className="absolute bottom-0">
          <Link href={"#names"}>
            <h1 className="text-white text-2xl">Explore our collection</h1>
            <div className="flex items-center justify-center">
              <Image
                src={Vector}
                alt="vector"
                className="cursor-pointer active:scale-50"
              />
            </div>
          </Link>
        </div>
        <div className="slides">
          <div id="slide-1" className="slide">
            <Image src={Fon} alt="img" />
          </div>
          <div id="slide-2" className="slide">
            <Image src={Fon} alt="img" />
          </div>
          <div id="slide-3" className="slide">
            <Image src={Fon} alt="img" />
          </div>
          <div id="slide-4" className="slide">
            <Image src={Fon} alt="img" />
          </div>
          <div id="slide-5" className="slide">
            <Image src={Fon} alt="img" />
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Carousel;
