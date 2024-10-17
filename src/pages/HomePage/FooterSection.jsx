import { Img, Text, Button, Input } from "../../components";
import React from "react";

export default function FooterSection() {
  return (
    <>
      {/* footer section */}
      <div className="mt-[54px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[74px] md:gap-[55px] md:px-5 sm:gap-[37px]">
          <Img src="images/img_line.svg" alt="Decorative Line" className="h-px" />
          <div className="flex flex-col gap-[22px]">
            <div className="flex md:flex-col">
              <div className="flex w-[48%] flex-col gap-4 md:w-full">
                <Img src="images/img_image_1.png" alt="About Image" className="h-[150px] w-[150px] object-cover" />
                <div className="flex flex-wrap justify-between gap-5">
                  <a href="#">
                    <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                      About Us
                    </Text>
                  </a>
                  <a href="Testimonials" target="_blank" rel="noreferrer">
                    <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                      Testimonials
                    </Text>
                  </a>
                  <a href="FAQ’s" target="_blank" rel="noreferrer">
                    <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                      FAQ’s
                    </Text>
                  </a>
                  <a href="Blogs" target="_blank" rel="noreferrer">
                    <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                      Blogs
                    </Text>
                  </a>
                  <a href="Contact" target="_blank" rel="noreferrer">
                    <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                      Contact
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-1 justify-center p-10 md:self-stretch sm:p-5">
                <div className="flex w-[64%] flex-col items-center gap-2 md:w-full">
                  <Text
                    size="textxl"
                    as="p"
                    className="font-belgianoserif text-[32px] font-normal tracking-[-0.64px] text-blue_gray-200 md:text-[30px] sm:text-[28px]"
                  >
                    Subscribe to our newsletter
                  </Text>
                  <div className="relative h-[62px] content-center self-stretch md:h-auto">
                    <Input
                      shape="round"
                      type="email"
                      name="Email Input"
                      placeholder={`Enter your email`}
                      className="mx-auto rounded-[30px] border-2 px-[22px] tracking-[-0.18px]"
                    />
                    <Button
                      shape="round"
                      className="absolute bottom-0 right-2 top-0 my-auto min-w-[128px] rounded-[22px] border-2 border-solid border-blue_gray-200 px-[22px] font-aileron tracking-[-0.18px] sm:px-5"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px bg-blue_gray-600_04" />
            <div className="flex items-center justify-between gap-5 sm:flex-col">
              <div className="flex flex-1 flex-wrap sm:self-stretch">
                <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                  © 2024 · SRIM Media
                </Text>
                <a href="#" className="ml-6">
                  <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                    · Terms
                  </Text>
                </a>
                <a href="#" className="ml-6">
                  <Text as="p" className="text-[20px] font-medium tracking-[-0.40px] text-blue_gray-200">
                    · Privacy
                  </Text>
                </a>
              </div>
              <div className="flex gap-8">
                <Img src="images/img_basil_facebook_solid.svg" alt="Facebook Icon" className="h-[24px] w-[24px]" />
                <Img src="images/img_prime_twitter.svg" alt="Twitter Icon" className="h-[24px] w-[24px]" />
                <Img src="images/img_ri_linkedin_fill.svg" alt="Linkedin Icon" className="h-[24px] w-[24px]" />
                <Img src="images/img_mdi_instagram.svg" alt="Instagram Icon" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
