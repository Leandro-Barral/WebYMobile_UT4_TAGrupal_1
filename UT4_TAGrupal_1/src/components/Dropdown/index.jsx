import React from 'react';

const Dropdown = ({ id, value, options, required, onChange }) => {
  return (
    <div className="select">
      <select id={id} required={required} defaultValue={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
