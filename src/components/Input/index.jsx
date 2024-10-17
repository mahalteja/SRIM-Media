import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[30px]",
};

const variants = {
  fill: {
    blue_gray_200_19: "bg-blue_gray-200_19 text-blue_gray-200",
  },
};

const sizes = {
  xs: "h-[62px] px-[22px] text-[18px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "blue_gray_200_19",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center sm:px-5 cursor-text text-blue_gray-200 tracking-[-0.18px] font-aileron text-[18px] border-blue_gray-200_19 border-2 border-solid bg-blue_gray-200_19 flex-grow rounded-[30px]  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_200_19"]),
};

export { Input };
