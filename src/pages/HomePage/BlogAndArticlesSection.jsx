import { Heading, Img, Text } from "../../components";
import MarketingContent from "../../components/MarketingContent";
import React, { Suspense } from "react";

const marketingEvolutionList = [
  {
    imageSource: "images/img_image_16.png",
    headlineText: "The Evolution of Marketing: Legacy Meets Cost-Effective Modern Marketing",
  },
  {
    imageSource: "images/img_image_16_314x350.png",
    headlineText: "The Digital Edge: Why Digital Marketing is the Lifeline for New Businesses",
  },
  { imageSource: "images/img_image_16_1.png", headlineText: "YouTube&#39;s Ad Revolution: Captivate and Convert" },
  {
    imageSource: "images/img_image_16_2.png",
    headlineText: "Digital Marketing Drives Unmatched Enrollment Success in Education Industry",
  },
];

export default function BlogAndArticlesSection() {
  return (
    <>
      {/* blog and articles section */}
      <div className="mt-32 flex flex-col gap-6 overflow-auto">
        <div className="container-xs self-center md:px-5">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-3.5 self-stretch">
              <Img src="images/img_line_1.svg" alt="Line Image" className="mt-4 h-px" />
              <Heading
                as="h2"
                className="self-center text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
              >
                Blogs
              </Heading>
            </div>
            <Text
              size="text3xl"
              as="p"
              className="font-belgianoserif text-[56px] font-normal text-blue_gray-200 md:text-[48px] sm:text-[42px]"
            >
              Articles From SRIM Media
            </Text>
          </div>
        </div>
        <div className="overflow-x-scroll">
          <div className="mb-2 w-[2340px] overflow-x-scroll">
            <div className="flex w-[2340px] items-start md:flex-col">
              <div className="flex flex-1 gap-12 md:flex-col md:self-stretch md:px-5">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {marketingEvolutionList.map((d, index) => (
                    <MarketingContent {...d} key={"evolutionList" + index} />
                  ))}
                </Suspense>
              </div>
              <div className="flex w-[46%] flex-col gap-6 self-center md:w-full md:px-5">
                <div className="flex justify-end gap-12 md:flex-col">
                  <Img
                    src="images/img_image_16_3.png"
                    alt="First Image"
                    className="h-[314px] w-[34%] rounded-[24px] object-contain md:w-full"
                  />
                  <Img
                    src="images/img_image_16_4.png"
                    alt="Second Image"
                    className="h-[314px] w-[34%] rounded-[24px] object-contain md:w-full"
                  />
                </div>
                <div className="flex flex-wrap justify-end gap-12">
                  <Heading size="headingxs" as="h3" className="text-[24px] font-bold text-blue_gray-200 md:text-[22px]">
                    SRIM WORKS&#39; Comprehensive Analysis of Super Specialty Hospitals Business Landscape in Hyderabad
                  </Heading>
                  <Heading size="headingxs" as="h4" className="text-[24px] font-bold text-blue_gray-200 md:text-[22px]">
                    Market Dominance and Innovation: Analyzing the Future of Diagnostic Centres in Hyderabad
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
