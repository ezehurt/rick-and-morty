import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useUpDownKey from "../../hooks/useUpDownKey";
import SuggestionItem from "./suggestion-item/SuggestionItem";

function Suggestions({
    suggestions,
    onChange,
    onClick,
    onCancel,
    initialySelected,
    isOpen,
    subtitle,
}) {


    const [texts, setTexts] = useState(suggestions);

    const { selected, clearSelection } = useUpDownKey(
        initialySelected,
        suggestions.length,
        isOpen,
        {
            key: "Enter", callback: (selected) => {
                handleClick(suggestions[selected]?.name || suggestions[selected] || null)
            }
        }
    );

    const handleUnselectAll = () => {
        clearSelection();
    };

    const handleClick = (suggestion) => {
        onClick(suggestion);
        handleUnselectAll();
    };

    useEffect(() => {
        setTexts(suggestions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [suggestions]);

    const handleBlur = () => {
        onChange(null);
    };

    const handleFocus = (suggestion) => {
        onChange(suggestion);
    };

    const findSuggestionIndex = (index) => () => {
        return selected === index;
    };

    return isOpen ? (
        <div className="suggestion">
            <div className="suggestion__wrapper">
                {subtitle && <h4 className="suggestion__title">{subtitle}</h4>}
                <ul className="suggestion__list" data-testid="suggestion-testid">
                    {texts.map((suggestion, index) => (
                        <SuggestionItem
                            key={`suggestion-${index}`}
                            text={suggestion.name}
                            onClick={() => handleClick(suggestion.name || null)}
                            imgSrc={suggestion.image}
                            imgAlt={`logo-${suggestion.name}`}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            onCancel={onCancel}
                            isFocused={findSuggestionIndex(index)()}
                        />
                    ))}
                </ul>
            </div>
        </div>

    ) : null;
}

Suggestions.propTypes = {
    suggestions: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    selected: PropTypes.number,
    highlight: PropTypes.string,
    suggestionType: PropTypes.array,
    icon: PropTypes.string,
    subtitle: PropTypes.string,
    isOpen: PropTypes.bool,
};

export default Suggestions;
