import React from 'react';

const Input = ({ id, label, type = 'text', placeholder, required }) => {

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
                    />
                ) : (
                    <input
                        id={id}
                        className="input"
                        type={type}
                        placeholder={placeholder}
                        required={required}
                    />
                )}
            </div>
        </div>
    )
};

export default Input;
