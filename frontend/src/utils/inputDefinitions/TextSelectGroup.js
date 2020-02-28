import React from "react";
import Select from 'react-select';
import PropTypes from "prop-types";
import ClassNames from "classnames";

const TextSelectGroup = ({
                             label,
                             name,
                             options,
                             value,
                             placeholder,
                             type,
                             onChange,
                             error
                         }) => {
    return (
        <div className="form-group" style={{marginBottom: 30}}>
            <label htmlFor={name}> {label} </label>
            <Select
                className={ClassNames("form-control", {
                    "is-invalid": error
                })}
                type={type}
                name={name}
                options={options}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback"> {error} </div>}
        </div>
    );
};

TextSelectGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextSelectGroup.defaultProps = {
    type: "text"
};

export default TextSelectGroup;
