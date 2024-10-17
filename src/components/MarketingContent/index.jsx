import { Heading, Img } from "./..";
import React from "react";

export default function MarketingContent({
  imageSource = "images/img_image_16.png",
  headlineText = "The Evolution of Marketing: Legacy Meets Cost-Effective Modern Marketing",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-6`}>
      <Img src={imageSource} alt="Feature Image" className="h-[314px] w-full rounded-[24px] object-cover" />
      <Heading size="headingxs" as="h4" className="w-full text-[24px] font-bold leading-8 text-blue_gray-200">
        {headlineText}
      </Heading>
    </div>
  );
}
