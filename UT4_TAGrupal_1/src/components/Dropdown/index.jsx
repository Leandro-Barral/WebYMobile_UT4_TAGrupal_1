import React from 'react';

const Dropdown = ({ id, options, required }) => {
  return (
    <div className="select">
      <select id={id} required={required}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
};

export default Dropdown;