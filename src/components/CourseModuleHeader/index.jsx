import { Heading } from "./..";
import React from "react";

export default function CourseModuleHeader({
  moduleTitle = (
    <>
      Month 1: <br />
      Foundation Building{" "}
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full md:h-auto px-14 py-[90px] md:p-5 bg-cover bg-no-repeat rounded-[24px]`}
    >
      <Heading
        size="headingxs"
        as="h4"
        className="w-full text-center text-[24px] font-bold leading-8 tracking-[-0.48px] text-blue_gray-200"
      >
        {moduleTitle}
      </Heading>
    </div>
  );
}
