/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import "../../components/Header/index.css";
import End from "@/components/EndPages";
import HomeMain from "@/components/HomeMain";
import Section from "@/components/Section";
import HomeFetchDataSec from "@/components/HomeFetchDataSec";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <h1 className="bg-[#EC165EFF] pb-4">.</h1>
      <Carousel />
      {/* <HomeMain /> */}
      <div className="mx-auto mt-[150px] w-[70%]">
        <p className="text-center text-[24px] font-[400]" id="names">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </div>
      <div>
        <section className="mt-[100px]">
          <HomeFetchDataSec />
          {/*  */}
          <Section />
        </section>
      </div>
      <End />
    </>
  );
};

export default Home;
