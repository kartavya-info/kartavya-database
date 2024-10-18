import React from 'react';

const CheckboxComponent = ({
  title,
  name,
  checked,
  handleChange
}) => {
  return (
    <div className="flex items-center gap-2 pl-[2.5%] pr-[2.5%] xl:w-[90%]">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={name} className="text-sm font-semibold">
        {title}
      </label>
    </div>
  );
};

export default CheckboxComponent;
