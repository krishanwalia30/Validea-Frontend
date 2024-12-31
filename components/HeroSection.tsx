import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchCount } from "@/lib/utils";

const HeroSection = async () => {
  const count = await fetchCount();

  return (
    <div>
      <div className="flex-col sm:flex sm:flex-row justify-evenly sm:gap-4 sm:my-8 scroll-smooth h-[83vh] items-center">
        <div className="my-6">
          {/* For the text and CTA */}
          <h1 className="!text-left !text-5xl lg:!text-7xl lg:mt-8">
            Validate Your Ideas, <br />
            Uncover Hidden <br />
            Opportunities
          </h1>
          <h4 className="!text-left mt-3 !text-[545454] !text-2xl !font-semibold">
            Get comprehensive <br />
            market research report <br /> in minutes
          </h4>
          {/* CTA Button */}
          <Link href={`/validate`}>
            <button className="cta-button mt-4 shadow-xl">
              Validate Your Idea Now <br />
              <h4 className="!text-sm">No Login/Signup Required*</h4>
            </button>
          </Link>

          {/* For the Review */}
          <div className="mt-4 flex gap-2">
            <Image src={"/Star.png"} width={25} height={25} alt="Star" />
            <Image src={"/Star.png"} width={25} height={25} alt="Star" />
            <Image src={"/Star.png"} width={25} height={25} alt="Star" />
            <Image src={"/Star.png"} width={25} height={25} alt="Star" />
            <Image src={"/Star.png"} width={25} height={25} alt="Star" />
          </div>
          <span className="font-extrabold text-xl">{count}</span>
          <span className="font-medium text-lg"> ideas validated already!</span>
        </div>
        <div className="flex justify-center">
          {/* For the image */}
          <Image
            src={"/HeroSectionImg.png"}
            width={1000}
            height={1000}
            alt="Star"
            className="w-1/2 sm:w-[24rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
