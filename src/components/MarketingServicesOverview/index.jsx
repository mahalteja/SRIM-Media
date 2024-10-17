import { Text, Heading, Img } from "./..";
import React from "react";

export default function MarketingServicesOverview({
  seoTitle = (
    <>
      SEO
      <br />
      (Search Engine Optimization)
    </>
  ),
  seoDescription = "We use advanced SEO strategies to boost rankings, attract the right audience, and drive sustained organic growth.",
  tagManagerTitle = "Google Tag Manager",
  tagManagerDescription = "We simplify your marketing with Google Tag Manager, enabling seamless tracking and data capture to enhance campaign measurement.",
  googleAdsTitle = "Google Ads",
  googleAdsDescription = "We create data-driven, personalized Google Ads campaigns to boost conversions and ROI.",
  googleBusinessTitle = "Google Business Profile",
  googleBusinessDescription = "We manage and optimize your Google Business Profile to boost local SEO and attract more customers.",
  analyticsTitle = "Google Analytics",
  analyticsDescription = "We transform raw data into actionable insights, helping optimize marketing and drive growth with Google Analytics.",
  webDesignTitle = "Web Design & Development",
  webDesignDescription = "We create user-focused websites that drive conversions while incorporating design trends and SEO best practices.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center w-[810px]`}>
      <div className="w-full sm:w-full">
        <div className="h-[2px] bg-blue_gray-200" />
        <div className="mt-2.5 flex items-center">
          <div className="flex w-full items-start justify-center gap-4 px-4">
            <Img src="images/img_seo_1.png" alt="Seo Image" className="h-[48px] w-[48px] object-cover" />
            <div className="flex flex-1 flex-col items-center gap-0.5 self-center sm:gap-0.5">
              <Heading
                as="p"
                className="text-[24px] font-medium leading-8 tracking-[-0.48px] text-blue_gray-200 sm:text-[20px]"
              >
                {seoTitle}
              </Heading>
              <Text
                as="p"
                className="w-[98%] text-[20px] font-normal leading-[27px] tracking-[-0.40px] text-blue_gray-200 sm:w-full sm:text-[17px]"
              >
                {seoDescription}
              </Text>
            </div>
          </div>
          <div className="flex w-full items-start justify-center gap-4 px-6 sm:px-5">
            <Img src="images/img_frame.svg" alt="Tag Manager Image" className="h-[48px] w-[48px]" />
            <div className="flex flex-1 flex-col items-start justify-center self-center">
              <Heading as="p" className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 sm:text-[20px]">
                {tagManagerTitle}
              </Heading>
              <Text
                as="p"
                className="w-full text-[20px] font-normal leading-[27px] tracking-[-0.40px] text-blue_gray-200 sm:w-full sm:text-[17px]"
              >
                {tagManagerDescription}
              </Text>
            </div>
          </div>
        </div>
        <div className="mt-3 h-px bg-blue_gray-200" />
        <div className="mt-[26px] flex">
          <div className="flex w-full items-start justify-center gap-4 px-6 sm:px-5">
            <Img src="images/img_logotype_1.png" alt="Google Ads Image" className="h-[48px] w-[48px] object-cover" />
            <div className="flex flex-1 flex-col items-start justify-center self-center">
              <Heading as="p" className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 sm:text-[20px]">
                {googleAdsTitle}
              </Heading>
              <Text
                as="p"
                className="w-full text-[20px] font-normal leading-[27px] tracking-[-0.40px] text-blue_gray-200 sm:w-full sm:text-[17px]"
              >
                {googleAdsDescription}
              </Text>
            </div>
          </div>
          <div className="flex w-full items-start justify-center gap-4 px-6 sm:px-5">
            <Img
              src="images/img_google_1.png"
              alt="Business Profile Image"
              className="h-[48px] w-[48px] object-cover"
            />
            <div className="flex flex-1 flex-col items-start justify-center self-center">
              <Heading as="p" className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 sm:text-[20px]">
                {googleBusinessTitle}
              </Heading>
              <Text
                as="p"
                className="w-full text-[20px] font-normal leading-[27px] tracking-[-0.40px] text-blue_gray-200 sm:w-full sm:text-[17px]"
              >
                {googleBusinessDescription}
              </Text>
            </div>
          </div>
        </div>
        <div className="mt-7 h-px bg-blue_gray-200" />
        <div className="mt-[26px] flex">
          <div className="flex w-full items-start justify-center gap-4 px-6 sm:px-5">
            <Img src="images/img_settings.svg" alt="Analytics Image" className="h-[48px] w-[48px]" />
            <div className="flex flex-1 flex-col items-start justify-center self-center">
              <Heading as="p" className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 sm:text-[20px]">
                {analyticsTitle}
              </Heading>
              <Text
                as="p"
                className="w-full text-[20px] font-normal leading-[27px] tracking-[-0.40px] text-blue_gray-200 sm:w-full sm:text-[17px]"
              >
                {analyticsDescription}
              </Text>
            </div>
          </div>
          <div className="flex w-full items-start justify-center gap-4 px-6 sm:px-5">
            <Img src="images/img_web_design_1.png" alt="Web Design Image" className="h-[48px] w-[48px] object-cover" />
            <div className="flex flex-1 flex-col items-center justify-center self-center">
              <Heading as="p" className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 sm:text-[20px]">
                {webDesignTitle}
              </Heading>
              <Text
                as="p"
                className="w-full text-[20px] font-normal leading-[27px] tracking-[-0.40px] text-blue_gray-200 sm:w-full sm:text-[17px]"
              >
                {webDesignDescription}
              </Text>
            </div>
          </div>
        </div>
        <div className="mt-7 h-[2px] bg-blue_gray-200" />
      </div>
    </div>
  );
}
