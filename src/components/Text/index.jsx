import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal not-italic",
  texts: "text-[16px] font-normal not-italic sm:text-[13px]",
  textmd: "text-[20px] font-normal not-italic sm:text-[17px]",
  textxl: "text-[32px] font-normal not-italic md:text-[30px] sm:text-[27px]",
  text2xl: "text-[36px] font-normal not-italic md:text-[34px] sm:text-[30px]",
  text3xl: "text-[56px] font-normal not-italic md:text-[48px] sm:text-[47px]",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-200 font-satoshi ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
