import { Img, Text, Button, Heading } from "../../components";
import MarketingServicesOverview from "../../components/MarketingServicesOverview";
import React, { Suspense } from "react";

const marketingStrategiesList = [
  {
    seoTitle: (
      <>
        SEO
        <br />
        (Search Engine Optimization)
      </>
    ),
    seoDescription:
      "We use advanced SEO strategies to boost rankings, attract the right audience, and drive sustained organic growth.",
    tagManagerTitle: "Google Tag Manager",
    tagManagerDescription:
      "We simplify your marketing with Google Tag Manager, enabling seamless tracking and data capture to enhance campaign measurement.",
    googleAdsTitle: "Google Ads",
    googleAdsDescription: "We create data-driven, personalized Google Ads campaigns to boost conversions and ROI.",
    googleBusinessTitle: "Google Business Profile",
    googleBusinessDescription:
      "We manage and optimize your Google Business Profile to boost local SEO and attract more customers.",
    analyticsTitle: "Google Analytics",
    analyticsDescription:
      "We transform raw data into actionable insights, helping optimize marketing and drive growth with Google Analytics.",
    webDesignTitle: "Web Design & Development",
    webDesignDescription:
      "We create user-focused websites that drive conversions while incorporating design trends and SEO best practices.",
  },
  {
    seoTitle: (
      <>
        SEO
        <br />
        (Search Engine Optimization)
      </>
    ),
    seoDescription:
      "We use advanced SEO strategies to boost rankings, attract the right audience, and drive sustained organic growth.",
    tagManagerTitle: "Google Tag Manager",
    tagManagerDescription:
      "We simplify your marketing with Google Tag Manager, enabling seamless tracking and data capture to enhance campaign measurement.",
    googleAdsTitle: "Google Ads",
    googleAdsDescription: "We create data-driven, personalized Google Ads campaigns to boost conversions and ROI.",
    googleBusinessTitle: "Google Business Profile",
    googleBusinessDescription:
      "We manage and optimize your Google Business Profile to boost local SEO and attract more customers.",
    analyticsTitle: "Google Analytics",
    analyticsDescription:
      "We transform raw data into actionable insights, helping optimize marketing and drive growth with Google Analytics.",
    webDesignTitle: "Web Design & Development",
    webDesignDescription:
      "We create user-focused websites that drive conversions while incorporating design trends and SEO best practices.",
  },
  {
    seoTitle: (
      <>
        SEO
        <br />
        (Search Engine Optimization)
      </>
    ),
    seoDescription:
      "We use advanced SEO strategies to boost rankings, attract the right audience, and drive sustained organic growth.",
    tagManagerTitle: "Google Tag Manager",
    tagManagerDescription:
      "We simplify your marketing with Google Tag Manager, enabling seamless tracking and data capture to enhance campaign measurement.",
    googleAdsTitle: "Google Ads",
    googleAdsDescription: "We create data-driven, personalized Google Ads campaigns to boost conversions and ROI.",
    googleBusinessTitle: "Google Business Profile",
    googleBusinessDescription:
      "We manage and optimize your Google Business Profile to boost local SEO and attract more customers.",
    analyticsTitle: "Google Analytics",
    analyticsDescription:
      "We transform raw data into actionable insights, helping optimize marketing and drive growth with Google Analytics.",
    webDesignTitle: "Web Design & Development",
    webDesignDescription:
      "We create user-focused websites that drive conversions while incorporating design trends and SEO best practices.",
  },
];

export default function OurServicesSection() {
  return (
    <>
      {/* our services section */}
      <div>
        <div className="flex gap-9 md:flex-col">
          <div className="flex w-[12%] flex-col gap-[222px] md:w-full md:gap-[166px] md:px-5 sm:gap-[111px]">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <Img src="images/img_line_1.svg" alt="Services Decorative Line" className="h-px" />
                <Heading
                  as="p"
                  className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
                >
                  Our Services
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-[22px]">
                <div className="flex flex-col items-center gap-4 self-stretch">
                  <Text
                    size="text3xl"
                    as="p"
                    className="font-belgianoserif text-[56px] font-normal leading-[110%] text-blue_gray-200 md:text-[48px] sm:text-[42px]"
                  >
                    <>
                      Services <br />
                      offer for you
                    </>
                  </Text>
                  <Heading
                    as="p"
                    className="w-full text-[24px] font-normal leading-8 tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
                  >
                    Enhance and secure your business with our professional services.
                  </Heading>
                </div>
                <Button
                  variant="outline"
                  shape="round"
                  className="min-w-[160px] rounded-[22px] !border px-6 font-aileron font-semibold tracking-[-0.18px] sm:px-5"
                >
                  View Services
                </Button>
              </div>
            </div>
            <div className="mx-[60px] flex gap-6 md:mx-0">
              <Img src="images/img_arrow_down.svg" alt="Arrow Down Icon" className="h-[48px] w-[32%] object-contain" />
              <div className="flex flex-1 items-center justify-center gap-6">
                <Text as="p" className="text-[20px] font-normal tracking-[-0.40px] text-blue_gray-200">
                  <span className="font-bold">01</span>
                  <span>/03</span>
                </Text>
                <div className="flex flex-1 justify-center rounded-[24px] bg-blue_gray-200 p-3">
                  <Img src="images/img_arrow_right.svg" alt="Arrow Right Icon" className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-9 flex w-[88%] gap-10 overflow-x-scroll md:ml-0 md:w-full md:flex-col md:px-5">
            <Suspense fallback={<div>Loading feed...</div>}>
              {marketingStrategiesList.map((d, index) => (
                <MarketingServicesOverview {...d} key={"listSection" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
