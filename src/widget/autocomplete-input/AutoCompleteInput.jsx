import React, { useRef } from "react";
import PropTypes from "prop-types";

// Input field that receives the value to be filled
function AutocompleteInput({
    value = "",
    placeholder,
    onChange,
    onClear,
    onFocus,
    onBlur,
}) {
    const inputRef = useRef();

    function handleChange(e) {
        onChange(e.target.value);
    }

    function handleBlur() {
        onBlur()
    }

    function handleFocus() {
        onFocus()
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
          } 
    }
    return (
        <fieldset className="autocomplete-input">
            <input
                ref={inputRef}
                data-testid="input-test"
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder={placeholder}
                value={value}
                className="autocomplete-input__field"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {value && <button onClick={onClear} className="autocomplete-input__right-action">X</button>}
        </fieldset>
    );
}

AutocompleteInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isInlineSuggestionDisabled: PropTypes.bool
};

export default AutocompleteInput;
