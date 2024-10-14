import React from 'react';

const InputComponent = ({title, name, type, placeholder}) => {
  return (
    <div className="flex flex-col gap-1 pl-[2.5%] pr-[2.5%] xl:w-[90%]">
      <label htmlFor={name} className="text-sm font-semibold">
        {title} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={name}
        required={true}
        placeholder={placeholder}
        className="w-full outline-none rounded-lg p-2 font-semibold placeholder-gray-500 placeholder:text-sm placeholder:font-semibold"
      />
    </div>
  );
};

export default InputComponent;
