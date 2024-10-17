import MegaMenu1 from "../MegaMenu1";
import { Button, Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header {...props} className={`${props.className} flex self-stretch justify-center items-end py-4`}>
      <div className="container-xs mt-4 flex items-center justify-between gap-5 px-8 md:flex-col md:px-5">
        <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[80px] w-[80px] object-contain" />
        <div className="flex w-[72%] items-center justify-center gap-10 md:w-full md:flex-col">
          <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
            <ul className="flex gap-10 sm:flex-col">
              <li>
                <a href="#">
                  <Text size="texts" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-blue_gray-200">
                    About Us
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="texts" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-blue_gray-200">
                    Services
                  </Text>
                </a>
              </li>
              <li
                onMouseLeave={() => {
                  setMenuOpen(false);
                }}
                onMouseEnter={() => {
                  setMenuOpen(true);
                }}
              >
                <div className="flex cursor-pointer items-center gap-1">
                  <Text size="texts" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-blue_gray-200">
                    UI&UX
                  </Text>
                  <Img
                    src="images/img_arrow_down_blue_gray_200.svg"
                    alt="Dropdown Arrow"
                    className="h-[20px] w-[20px]"
                  />
                </div>
                {menuOpen ? <MegaMenu1 /> : null}
              </li>
              <li>
                <a href="#">
                  <Text size="texts" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-blue_gray-200">
                    For Humanity
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text size="texts" as="p" className="text-[16px] font-normal tracking-[-0.32px] text-blue_gray-200">
                    Blogs
                  </Text>
                </a>
              </li>
            </ul>
            <a href="#">
              <Img
                src="images/img_phoneoutline.svg"
                alt="Phone Icon"
                className="ml-10 h-[24px] w-[24px] md:ml-0 md:w-full"
              />
            </a>
            <Text
              size="texts"
              as="p"
              className="ml-2 text-[16px] font-normal tracking-[-0.32px] text-blue_gray-200 md:ml-0"
            >
              +91 9876543210
            </Text>
          </div>
          <Button
            variant="outline"
            shape="round"
            className="min-w-[134px] rounded-[22px] !border px-6 tracking-[-0.32px] sm:px-5"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
