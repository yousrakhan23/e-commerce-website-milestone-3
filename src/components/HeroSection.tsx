import React from "react";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              SHOP NOW <span className="text-yellow-500">,</span> PAY LATER!
            </h1>
            <p className="mb-8 leading-relaxed">
              Enjoy flexible payment options on your favorite products! Buy now
              and pay later with our convenient installment plans. No interest,
              no hassle - just shop til youdrop!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
                Buy now..!!
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
