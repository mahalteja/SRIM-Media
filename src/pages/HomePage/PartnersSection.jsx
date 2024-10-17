import { Text } from "../../components";
import PartnerColumnList from "../../components/PartnerColumnList";
import React from "react";

export default function PartnersSection() {
  return (
    <>
      {/* partners section */}
      <div className="mt-[58px] flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[18px] md:px-5">
          <Text
            size="text3xl"
            as="p"
            className="font-belgianoserif text-[56px] font-normal tracking-[-1.12px] text-blue_gray-200 md:text-[48px] sm:text-[42px]"
          >
            Our Partners
          </Text>
          <PartnerColumnList />
        </div>
      </div>
    </>
  );
}
