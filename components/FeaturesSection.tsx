import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div
      className="bg-[#FCF3E1] rounded-xl mt-8 p-[-5%] flex scroll-smooth"
      id="features"
    >
      <div className="mx-auto py-8 px-4 space-y-4">
        <h1 className="!text-[#FF5100] my-2 animate-bounce">Key Features</h1>

        <div className="keyfeatures-grid grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
          {/* Market Size  */}
          <div className="keyfeatures-card">
            <Image
              src="/Features/1.svg"
              height={100}
              width={100}
              alt="marketsizeAndGrowth"
              className="w-[200px]"
            />
            <div>
              <span className="text-2xl font-bold text-center">
                Market Size & Growth
              </span>
              <br />
              <span className="text-[#545454]">
                Discover the potential of your target market.
              </span>
            </div>
          </div>
          {/* Competitive Analysis */}
          <div className="keyfeatures-card">
            <Image
              src="/Features/2.svg"
              height={100}
              width={100}
              alt="CompetitiveAnalysis"
              className="w-[200px]"
            />
            <div>
              <span className="text-2xl font-bold text-center">
                Competitive Analysis
              </span>
              <br />
              <span>
                Identify your competitors and understand their strengths and
                weaknesses.
              </span>
            </div>
          </div>
          {/* Trend Analysis */}
          <div className="keyfeatures-card">
            <Image
              src="/Features/3.svg"
              height={100}
              width={100}
              alt="TrendAnalysis"
              className="w-[200px]"
            />
            <div>
              <span className="text-2xl font-bold text-center">
                Trend Analysis
              </span>
              <br />
              <span>
                Stay ahead of the curve with insights into emerging trends.
              </span>
            </div>
          </div>
          {/* Customer Segmentation */}
          <div className="keyfeatures-card">
            <Image
              src="/Features/4.svg"
              height={100}
              width={100}
              alt="CustomerSegmentation"
              className="w-[200px]"
            />
            <div>
              <span className="text-2xl font-bold text-center">
                Customer Segmentation
              </span>
              <br />
              <span>Understand your ideal customer profile.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
