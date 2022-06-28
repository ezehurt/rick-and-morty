import React from "react";
import AutocompleteInput from "../autocomplete-input/AutoCompleteInput";
import ActionButton from "../button/action-button/ActionButton";

export default function AutoCompleteForm({
    onSubmit,
    onFocus,
    onBlur,
    onChange,
    value,
    setValue,
    placeholder,
    onClear
}) {

    function handleChange(searchString) {
        onChange(searchString);
        setValue(searchString);
    }

    function handleClear() {
        setValue("");
        onClear()
    }

    function handleSubmit(e) {
        e.preventDefault();
        setValue(value)
        onSubmit(value);
    }
    return (
        <form className="autocomplete-form" onSubmit={handleSubmit}>
            <AutocompleteInput
                value={value}
                placeholder={placeholder}
                onClear={handleClear}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <ActionButton icon="search" size="medium" className={"autocomplete-form__button"} testId="search-submit-button"/>
        </form>
    );
}
