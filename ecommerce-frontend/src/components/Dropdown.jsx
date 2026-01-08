import React from 'react';

function Dropdown({ label, options, selectedValue, handleOptionChange }) {
  return (
    <div className="flex items-center gap-2 pr-12 font-display w-full sm:w-auto">
      <label className="text-lg font-semibold text-primary whitespace-nowrap">{label}</label>

      <select
        className="px-3 py-2 border rounded-md transition border-primary focus:ring w-full sm:w-[240px]"
        value={selectedValue}
        onChange={(event) => handleOptionChange(event.target.value)}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
