import { Button, Img, Text, Slider, Heading } from "../../components";
import React from "react";

export default function ClientSuccessStoriesSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* client success stories section */}
      <div className="mt-[122px] flex flex-col items-center gap-2.5 overflow-auto">
        <div className="container-xs md:px-5">
          <div className="flex flex-col items-start gap-3.5">
            <div className="flex items-center gap-3.5 self-stretch">
              <Img src="images/img_line_1.svg" alt="Line Image" className="h-px" />
              <Heading as="h2" className="text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 md:text-[22px]">
                Reviews
              </Heading>
            </div>
            <Text
              size="text3xl"
              as="p"
              className="font-belgianoserif text-[56px] font-normal text-blue_gray-200 md:text-[48px] sm:text-[42px]"
            >
              Client Success Stories
            </Text>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="mx-auto flex w-full overflow-x-scroll">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex items-center md:flex-col">
                    <Img
                      src="images/img_ooui_quotes_ltr.svg"
                      alt="Opening Quote Image"
                      className="h-[48px] w-[48px] self-start md:w-full md:self-auto"
                    />
                    <div className="ml-14 flex flex-1 flex-col gap-8 md:ml-0 md:self-stretch md:px-5">
                      <div className="flex flex-col items-start gap-1.5">
                        <Text
                          size="textxl"
                          as="p"
                          className="w-[76%] font-belgianoserif text-[32px] font-normal leading-[110%] text-blue_gray-200 md:w-full md:text-[30px] sm:text-[28px]"
                        >
                          Their experience helped us to develop the business as whole
                        </Text>
                        <Text
                          as="p"
                          className="w-[88%] text-[20px] font-normal leading-[135%] tracking-[-0.40px] text-blue_gray-200 md:w-full"
                        >
                          I never realised change management is so very important in driving revenues. Thanks for
                          aligning the entire team to our common goal and helping us solve the disconnects through your
                          design thinking workshop. Appreciate the efforts and focus that you bring in your work. All
                          the best.
                        </Text>
                      </div>
                      <div className="flex items-center gap-[34px] sm:flex-col">
                        <div className="flex w-[52%] items-center gap-2 sm:w-full">
                          <Img
                            src="images/img_image_11.png"
                            alt="Profile Image"
                            className="h-[50px] w-[50px] object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start justify-center">
                            <Text size="texts" as="p" className="text-[16px] font-medium text-blue_gray-200">
                              Amelia
                            </Text>
                            <Text size="textxs" as="p" className="text-[14px] font-normal text-blue_gray-200">
                              Product Manager, DIAGEO, USA
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_frame_38.svg"
                          alt="Closing Quote Image"
                          className="h-[48px] w-[30%] object-contain sm:w-full"
                        />
                      </div>
                    </div>
                    <div className="h-[322px] w-px bg-gray-600 md:h-px md:w-[322px] md:px-5" />
                    <Img
                      src="images/img_ooui_quotes_ltr.svg"
                      alt="Repeat Quote Image"
                      className="ml-[54px] h-[48px] w-[48px] self-start md:ml-0 md:w-full md:self-auto"
                    />
                    <div className="ml-14 flex flex-1 flex-col md:ml-0 md:self-stretch md:px-5">
                      <Text
                        size="textxl"
                        as="p"
                        className="w-[76%] font-belgianoserif text-[32px] font-normal leading-[110%] text-blue_gray-200 md:w-full md:text-[30px] sm:text-[28px]"
                      >
                        Their experience helped us to develop the business as whole
                      </Text>
                      <Text
                        as="p"
                        className="mt-1.5 w-[88%] text-[20px] font-normal leading-[135%] tracking-[-0.40px] text-blue_gray-200 md:w-full"
                      >
                        I never realised change management is so very important in driving revenues. Thanks for aligning
                        the entire team to our common goal and helping us solve the disconnects through your design
                        thinking workshop. Appreciate the efforts and focus that you bring in your work. All the best.
                      </Text>
                      <div className="mt-8 flex items-center gap-[18px] sm:flex-col">
                        <div className="flex w-[54%] items-center gap-2 sm:w-full">
                          <Img
                            src="images/img_image_11.png"
                            alt="Repeat Profile Image"
                            className="h-[50px] w-[50px] object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start justify-center">
                            <Text size="texts" as="p" className="text-[16px] font-medium text-blue_gray-200">
                              Amelia
                            </Text>
                            <Text size="textxs" as="p" className="text-[14px] font-normal text-blue_gray-200">
                              Product Manager, DIAGEO, Canada
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_frame_38.svg"
                          alt="Repeat Closing Quote Image"
                          className="h-[48px] w-[30%] object-contain sm:w-full"
                        />
                      </div>
                    </div>
                    <div className="h-[322px] w-px bg-gray-600 md:h-px md:w-[322px] md:px-5" />
                    <Img
                      src="images/img_ooui_quotes_ltr.svg"
                      alt="Third Quote Image"
                      className="ml-[54px] h-[48px] w-[48px] self-start md:ml-0 md:w-full md:self-auto"
                    />
                    <div className="ml-14 flex flex-1 flex-col items-start md:ml-0 md:self-stretch md:px-5">
                      <Text
                        size="textxl"
                        as="p"
                        className="font-belgianoserif text-[32px] font-normal text-blue_gray-200 md:text-[30px] sm:text-[28px]"
                      >
                        Their experience helped us to develop the business as whole
                      </Text>
                      <Text as="p" className="mt-2 text-[20px] font-normal tracking-[-0.40px] text-blue_gray-200">
                        I never realised change management is so very important in driving revenues. Thanks for aligning
                        the entire team to our common goal and helping us solve the disconnects through your design
                        thinking workshop. Appreciate the efforts and focus that you bring in your work. All the best.
                      </Text>
                      <div className="mt-8 flex items-center gap-[34px] self-stretch sm:flex-col">
                        <div className="flex w-[52%] items-center gap-2 sm:w-full">
                          <Img
                            src="images/img_image_11.png"
                            alt="Third Profile Image"
                            className="h-[50px] w-[50px] object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start">
                            <Text size="texts" as="p" className="text-[16px] font-medium text-blue_gray-200">
                              Amelia
                            </Text>
                            <Text size="textxs" as="p" className="text-[14px] font-normal text-blue_gray-200">
                              Product Manager, DIAGEO, UK
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_frame_38.svg"
                          alt="Third Closing Quote Image"
                          className="h-[48px] w-[30%] object-contain sm:w-full"
                        />
                      </div>
                    </div>
                    <div className="h-[322px] w-px bg-gray-600 md:h-px md:w-[322px] md:px-5" />
                    <Img
                      src="images/img_ooui_quotes_ltr.svg"
                      alt="Fourth Quote Image"
                      className="ml-[54px] h-[48px] w-[48px] self-start md:ml-0 md:w-full md:self-auto"
                    />
                    <div className="ml-14 flex w-[20%] flex-col items-start md:ml-0 md:w-full md:px-5">
                      <Text
                        size="textxl"
                        as="p"
                        className="font-belgianoserif text-[32px] font-normal text-blue_gray-200 md:text-[30px] sm:text-[28px]"
                      >
                        Their experience helped us to develop the business as whole
                      </Text>
                      <Text as="p" className="mt-2 text-[20px] font-normal tracking-[-0.40px] text-blue_gray-200">
                        I never realised change management is so very important in driving revenues. Thanks for aligning
                        the entire team to our common goal and helping us solve the disconnects through your design
                        thinking workshop. Appreciate the efforts and focus that you bring in your work. All the best.
                      </Text>
                      <div className="mr-[22px] mt-8 flex items-center gap-8 self-stretch md:mr-0 sm:flex-col">
                        <div className="flex flex-1 items-center gap-2 sm:self-stretch">
                          <Img
                            src="images/img_image_11.png"
                            alt="Fourth Profile Image"
                            className="h-[50px] w-[50px] object-cover"
                          />
                          <div className="flex flex-1 flex-col items-start">
                            <Text size="texts" as="p" className="text-[16px] font-medium text-blue_gray-200">
                              Amelia
                            </Text>
                            <Text size="textxs" as="p" className="text-[14px] font-normal text-blue_gray-200">
                              Product Manager, DIAGEO, UK
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_frame_38.svg"
                          alt="Fourth Closing Quote Image"
                          className="h-[48px] w-[36%] object-contain sm:w-full"
                        />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="container-xs md:px-5">
            <div className="flex justify-end gap-12">
              <Button
                size="sm"
                shape="square"
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                className="w-[72px] rotate-[-180deg]"
              >
                <Img src="images/img_arrow_down.svg" />
              </Button>
              <Button
                size="sm"
                shape="round"
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                className="w-[72px] rounded-[24px] px-3"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
