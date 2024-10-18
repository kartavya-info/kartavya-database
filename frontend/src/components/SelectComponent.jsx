import React from 'react';

const SelectComponent = ({ title, name, options, value, handleInputChange}) => {
  return (
    <div className="flex flex-col gap-1 pl-[2.5%] pr-[2.5%] xl:w-[90%]">
      <label htmlFor={name} className="text-sm font-semibold">
        {title} <span className="text-red-500">*</span>
      </label>
      <div className={`relative`}>
        <select
          id={name}
          name={name}
          required={true}
          value={value}
          className={`w-full outline-none rounded-lg p-2 font-semibold text-sm`} 
          onChange={handleInputChange}
        >
          <option value="" disabled>Select {name}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;
