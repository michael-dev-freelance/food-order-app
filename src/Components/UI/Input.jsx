import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-2">
      {/* <label htmlFor={props.input.id} className="font-bold mr-4">
        {props.label}
      </label> */}
      <input
        ref={ref}
        className="py-1 text-center w-full rounded-xl border-2 border-solid border-[#ccc] pl-4"
        {...props.input}
      />
    </div>
  );
});

export default Input;
