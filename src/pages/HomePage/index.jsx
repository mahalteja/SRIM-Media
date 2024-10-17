import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import Header from "../../components/Header";
import BlogAndArticlesSection from "./BlogAndArticlesSection";
import ClientSuccessStoriesSection from "./ClientSuccessStoriesSection";
import FooterSection from "./FooterSection";
import MarketingFrameworkSection from "./MarketingFrameworkSection";
import OurServicesSection from "./OurServicesSection";
import PartnersSection from "./PartnersSection";
import React from "react";

export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency for Growth - SRIM Media</title>
        <meta
          name="description"
          content="SRIM Media, a leading digital marketing agency, specializes in SEO, Google Ads, and web development to drive real results and business growth. Discover our transformative approach to marketing."
        />
      </Helmet>
      <div className="w-full bg-gray-900">
        <div className="mb-1">
          <div className="flex h-[832px] flex-col items-center gap-[180px] bg-[url(/public/images/img_hero_section.png)] bg-cover bg-no-repeat md:h-auto md:gap-[135px] sm:gap-[90px]">
            <Header />
            <div className="container-xs mb-[308px] flex flex-col items-center px-14 md:px-5">
              <div className="flex w-[56%] flex-col items-center gap-[30px] md:w-full">
                <div className="flex flex-col items-center self-stretch">
                  <Text
                    size="text3xl"
                    as="p"
                    className="text-shadow-ts font-belgianoserif text-[56px] font-normal tracking-[-1.12px] text-blue_gray-200 md:text-[48px] sm:text-[42px]"
                  >
                    Your Growth is Our Priority
                  </Text>
                  <Heading
                    as="h1"
                    className="self-stretch text-center text-[24px] font-normal leading-8 tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
                  >
                    Boost Traffic, Increase Conversions, and Drive Real Results for Your Business.
                  </Heading>
                </div>
                <Button
                  shape="round"
                  className="min-w-[138px] rounded-[22px] border border-solid border-blue_gray-200 px-6 font-medium tracking-[-0.32px] sm:px-5"
                >
                  Grow with us
                </Button>
              </div>
            </div>
          </div>

          {/* partners section */}
          <PartnersSection />
          <div className="ml-[30px] mt-[124px] flex flex-col items-center overflow-auto md:ml-0">
            <div className="container-xs relative z-[1] md:px-5">
              <div className="flex flex-col gap-[124px] md:gap-[93px] sm:gap-[62px]">
                <div className="flex items-center md:flex-col">
                  <div className="flex flex-1 flex-col items-start gap-[104px] md:gap-[78px] md:self-stretch sm:gap-[52px]">
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex items-center gap-3.5">
                        <Img src="images/img_line_1.svg" alt="Decorative Line" className="h-px" />
                        <Heading
                          as="h2"
                          className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
                        >
                          About Us
                        </Heading>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col items-start">
                          <div className="flex self-stretch">
                            <Text
                              size="text2xl"
                              as="p"
                              className="text-[36px] font-normal tracking-[-0.72px] text-blue_gray-200 md:text-[34px] sm:text-[32px]"
                            >
                              We Don’t Just Market
                            </Text>
                          </div>
                          <Text
                            size="text3xl"
                            as="p"
                            className="relative mt-[-4px] font-belgianoserif text-[56px] font-normal tracking-[-1.12px] text-blue_gray-200 md:text-[48px] sm:text-[42px]"
                          >
                            We Transform
                          </Text>
                        </div>
                        <Heading
                          as="h3"
                          className="text-[24px] font-normal leading-8 tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
                        >
                          SRIM Media isn’t your typical digital marketing agency. We’re a powerhouse of strategic
                          thinkers, creators, and data-driven innovators who believe in one thing: results that matter.
                          While most agencies deliver traffic and clicks, we deliver measurable growth that fuels
                          long-term success for businesses that are ready to rise above the noise.
                        </Heading>
                      </div>
                    </div>
                    <Button
                      shape="round"
                      className="min-w-[140px] rounded-[22px] border border-solid border-blue_gray-200 px-6 font-aileron font-semibold tracking-[-0.18px] sm:px-5"
                    >
                      Know More
                    </Button>
                  </div>
                  <div className="flex w-[42%] flex-col gap-3 md:w-full">
                    <Img
                      src="images/img_intersect.png"
                      alt="Decorative Image One"
                      className="mx-[90px] h-[60px] object-cover md:mx-0"
                    />
                    <Img
                      src="images/img_intersect_70x422.png"
                      alt="Decorative Image Two"
                      className="ml-[42px] mr-10 h-[70px] object-cover md:mx-0"
                    />
                    <Img
                      src="images/img_intersect_116x506.png"
                      alt="Decorative Image Three"
                      className="h-[116px] object-cover"
                    />
                    <Img
                      src="images/img_intersect_70x426.png"
                      alt="Decorative Image Four"
                      className="mx-10 h-[70px] object-cover md:mx-0"
                    />
                    <Img
                      src="images/img_intersect_64x330.png"
                      alt="Decorative Image Five"
                      className="mx-[88px] h-[64px] object-cover md:mx-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-3.5 self-stretch">
                      <Img src="images/img_line_1.svg" alt="Process Decorative Line" className="h-px" />
                      <Heading
                        as="h4"
                        className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
                      >
                        Our Process :{" "}
                      </Heading>
                    </div>
                    <Heading
                      as="h5"
                      className="ml-12 text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 md:ml-0 md:text-[22px]"
                    >
                      From Client Requirements to continuous Optimization
                    </Heading>
                  </div>
                  <div className="flex items-start md:flex-col">
                    <div className="flex w-[42%] flex-col items-start gap-14 self-center px-3 md:w-full sm:gap-7">
                      <div className="mx-2.5 flex flex-col items-start gap-14 self-stretch md:mx-0 sm:gap-7">
                        <div className="ml-2 flex rounded-[26px] bg-blue_gray-200_19 p-4 shadow-xs md:ml-0">
                          <Img
                            src="images/img_component_1.svg"
                            alt="Business Analysis Image"
                            className="h-[20px] w-[88%] object-contain"
                          />
                        </div>
                        <div className="ml-10 flex rounded-[26px] bg-blue_gray-200_19 p-4 shadow-xs md:ml-0">
                          <Img
                            src="images/img_business_analysis.svg"
                            alt="Business Analysis Icon"
                            className="h-[20px] w-[86%] object-contain"
                          />
                        </div>
                        <div className="flex rounded-[38px] bg-blue_gray-200_19 p-4 shadow-xs">
                          <Img
                            src="images/img_digital_marketing.svg"
                            alt="Digital Marketing Icon"
                            className="h-[44px] w-[90%] object-contain"
                          />
                        </div>
                        <div className="ml-[62px] flex w-[54%] justify-center rounded-[26px] bg-blue_gray-200_19 p-4 shadow-xs md:ml-0 md:w-full">
                          <Img
                            src="images/img_strategic_planning.svg"
                            alt="Strategic Planning Icon"
                            className="h-[20px] w-[82%] object-contain"
                          />
                        </div>
                        <div className="ml-[58px] flex w-[56%] justify-center rounded-[26px] bg-blue_gray-200_19 p-4 shadow-xs md:ml-0 md:w-full">
                          <Img
                            src="images/img_launch_campaigns.svg"
                            alt="Launch Campaigns Icon"
                            className="h-[20px] w-[84%] object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex rounded-[26px] bg-blue_gray-200_19 p-4 shadow-xs">
                        <Img
                          src="images/img_data_analysis_and.svg"
                          alt="Data Analysis Icon"
                          className="h-[20px] w-[90%] object-contain"
                        />
                      </div>
                      <div className="ml-4 flex rounded-[26px] bg-blue_gray-200_19 p-4 shadow-xs md:ml-0">
                        <Img
                          src="images/img_ongoing_strategy.svg"
                          alt="Ongoing Strategy Icon"
                          className="h-[20px] w-[88%] object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center gap-[158px] border-b border-t border-solid border-blue_gray-200 px-14 py-16 md:gap-[118px] md:self-stretch md:p-5 sm:gap-[79px]">
                      <Heading
                        as="h6"
                        className="w-[96%] text-[24px] font-normal leading-8 tracking-[-0.48px] text-blue_gray-200 md:w-full md:text-[22px]"
                      >
                        At SRIM MEDIA, a successful digital marketing strategy is built on a foundation of thorough
                        analysis, strategic planning, and continuous optimization. Our specialized teams work in harmony
                        to ensure your business achieves its digital goals.{" "}
                      </Heading>
                      <div className="flex flex-col items-start gap-8 self-stretch">
                        <Button
                          shape="round"
                          className="min-w-[160px] rounded-[22px] border border-solid border-blue_gray-200 px-6 font-aileron font-semibold tracking-[-0.18px] sm:px-5"
                        >
                          Schedule Call
                        </Button>
                        <div className="flex items-center gap-2 self-stretch">
                          <Img
                            src="images/img_cursorclickoutline.svg"
                            alt="Cursor Click Icon"
                            className="h-[24px] w-[24px]"
                          />
                          <Text
                            size="texts"
                            as="p"
                            className="text-[16px] font-medium tracking-[-0.32px] text-blue_gray-200"
                          >
                            Click on left items to get detailed info of it
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[-50px] flex w-full flex-col gap-[124px] md:gap-[93px] sm:gap-[62px]">
              {/* marketing framework section */}
              <MarketingFrameworkSection />

              {/* our services section */}
              <OurServicesSection />
            </div>
          </div>

          {/* client success stories section */}
          <ClientSuccessStoriesSection />

          {/* blog and articles section */}
          <BlogAndArticlesSection />

          {/* footer section */}
          <FooterSection />
        </div>
      </div>
    </>
  );
}
