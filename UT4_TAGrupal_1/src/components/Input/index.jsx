import React, { useEffect } from 'react';

const Input = ({ id, label, value, type = 'text', placeholder, required, onChange }) => {

    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        className="textarea"
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        onChange={onChange}
                    />
                ) : (
                    <input
                        id={id}
                        className="input"
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        onChange={onChange}
                    />
                )}
            </div>
        </div>
    )
};

export default Input;
