import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CancelButton from "../../button/cancel-button/CancelButton";

function SuggestionItem({
    text,
    imgAlt,
    imgSrc,
    onClick,
    isFocused,
    onBlur,
    onFocus,
    onCancel,
}) {
    const [active, setActive] = useState(isFocused);
    const listItemRef = useRef(null);

    useEffect(() => {
        setActive(isFocused);
        if (!isFocused) {
            onBlur();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]);

    useEffect(() => {
        if (active) {
            listItemRef.current.focus();
        }
    }, [active]);

    const handleFocus = () => {
        setActive(true);
        onFocus(text);
    };

    const handleBlur = () => {
        setActive(false);
        onBlur();
    };

    const handleClick = () => {
        setActive(false);
        onClick(text);
    };

    return (
        <li onClick={handleClick}
            className={classNames("suggestion__item", {
                "suggestion__item--focused": active,
            })}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={listItemRef}
        >
            {imgSrc && <img src={imgSrc} alt={imgAlt} />}
            <p>{text}</p>
            {onCancel && (
                <CancelButton
                    className="suggestion__cancel"
                    onClick={() => onCancel(text)}
                    testId="cancel-btn"
                />
            )}
        </li>
    );
}

SuggestionItem.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onBlur: PropTypes.func.isRequired,
    isFocused: PropTypes.bool,
};

export default SuggestionItem;
