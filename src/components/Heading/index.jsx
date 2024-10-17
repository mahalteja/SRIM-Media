import React from "react";

const sizes = {
  textlg: "text-[24px] font-medium md:text-[22px] sm:text-[20px]",
  headingxs: "text-[24px] font-bold md:text-[22px] sm:text-[20px]",
};

const Heading = ({ children, className = "", size = "textlg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-200 font-satoshi ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
