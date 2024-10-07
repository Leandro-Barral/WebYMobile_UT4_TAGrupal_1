import React from 'react';

const Input = ({ id, label, value, type = 'text', placeholder, required }) => {

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
                    />
                ) : (
                    <input
                        id={id}
                        className="input"
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                    />
                )}
            </div>
        </div>
    )
};

export default Input;
