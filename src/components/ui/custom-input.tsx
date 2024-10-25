import React from "react";

interface CustomInputProps {
  title: string;
  placeholder: string;
  //   value: string;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ title, placeholder }) => {
  return (
    <div className="my-2">
      <label className="text-[#757575]" htmlFor={title}>
        {title}
      </label>
      <br />
      <div className="flex flex-row items-center border w-full rounded-lg border-[#cccccc] my-1 p-2">
        <input
          className="flex-1 p-1 border-none focus:outline-none"
          type="text"
          placeholder={placeholder}
          id={title}
        />
      </div>
    </div>
  );
};

export default CustomInput;
