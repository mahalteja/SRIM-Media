import { Heading, Img } from "../../components";
import CourseModuleHeader from "../../components/CourseModuleHeader";
import React, { Suspense } from "react";

const monthlyProgressGrid = [
  {
    moduleTitle: (
      <>
        Month 1: <br />
        Foundation Building{" "}
      </>
    ),
  },
  {
    moduleTitle: (
      <>
        Month 2: <br />
        Campaign Scaling{" "}
      </>
    ),
  },
  {
    moduleTitle: (
      <>
        Month 3: <br />
        Data-Driven Adjustments{" "}
      </>
    ),
  },
  {
    moduleTitle: (
      <>
        Month 4: <br />
        Aggressive Growth Model{" "}
      </>
    ),
  },
  {
    moduleTitle: (
      <>
        Month 5: <br />
        Optimization and Automation{" "}
      </>
    ),
  },
  {
    moduleTitle: (
      <>
        Month 6: <br />
        Strategic Scaling{" "}
      </>
    ),
  },
];

export default function MarketingFrameworkSection() {
  return (
    <>
      {/* marketing framework section */}
      <div className="flex flex-col items-start">
        <div className="container-xs flex flex-col gap-[18px] md:px-5">
          <div className="flex items-start gap-3.5 md:flex-col">
            <Img src="images/img_line_1.svg" alt="Framework Decorative Line" className="mt-4 h-px md:mt-0 md:w-full" />
            <Heading
              as="p"
              className="self-center text-[24px] font-medium tracking-[-0.48px] text-blue_gray-200 md:text-[22px]"
            >
              Exclusive 6-Month Marketing Framework by SRIM Media{" "}
            </Heading>
          </div>
          <div className="grid grid-cols-3 justify-center gap-6 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {monthlyProgressGrid.map((d, index) => (
                <CourseModuleHeader
                  {...d}
                  key={"frameworkGrid" + index}
                  className="h-[246px] bg-[url(/public/images/img_frame_246x390.png)]"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
