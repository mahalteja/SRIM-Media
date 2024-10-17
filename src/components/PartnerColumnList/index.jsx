import { Heading } from "./..";
import React from "react";

export default function PartnerColumnList({
  googlePartnerText = "Google Partner ",
  metaText = "Meta",
  linkedinText = "Linkedin",
  microsoftText = "Microsoft",
  googlePartnerTextDuplicate = "Google Partner ",
  metaTextDuplicate = "Meta",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col self-stretch items-center px-2 container-xs`}>
      <div className="flex w-full flex-col items-center justify-center px-4 py-[78px] md:py-5">
        <Heading
          size="headingxs"
          as="h4"
          className="mt-1 text-[24px] font-bold tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
        >
          {googlePartnerText}
        </Heading>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-14 py-20 md:p-5">
        <Heading
          size="headingxs"
          as="h4"
          className="text-[24px] font-bold tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
        >
          {metaText}
        </Heading>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-[54px] py-20 md:p-5">
        <Heading
          size="headingxs"
          as="h4"
          className="text-[24px] font-bold tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
        >
          {linkedinText}
        </Heading>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-12 py-20 md:p-5">
        <Heading
          size="headingxs"
          as="h4"
          className="text-[24px] font-bold tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
        >
          {microsoftText}
        </Heading>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-4 py-[78px] md:py-5">
        <Heading
          size="headingxs"
          as="h4"
          className="mt-1 text-[24px] font-bold tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
        >
          {googlePartnerTextDuplicate}
        </Heading>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-14 py-20 md:p-5">
        <Heading
          size="headingxs"
          as="h4"
          className="text-[24px] font-bold tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
        >
          {metaTextDuplicate}
        </Heading>
      </div>
    </div>
  );
}
