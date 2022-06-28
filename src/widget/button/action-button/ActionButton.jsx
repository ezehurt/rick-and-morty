import PropTypes from "prop-types";
import React from "react";

import classnames from "classnames";
import Icon from "../../icon/Icon";

const ActionButton = ({
    id,
    icon,
    onClick,
    onMouseEnter = (f) => f,
    onMouseLeave = (f) => f,
    onMouseOut = (f) => f,
    type = "submit",
    text,
    testId,
    className,
    size,
    color
}) => {
    return (
        <button
            id={id}
            type={type}
            data-testid={testId}
            className={classnames(
                "action-button",
                className
            )}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseOut={onMouseOut}
        >
            {!text && (
                <Icon icon={icon} size={size} color={color}/>
            )}
        </button>
    );
}

ActionButton.defaultProps = {
    disabled: false,
    large: false,
};

ActionButton.propTypes = {
    icon: PropTypes.string,
    onDisabledOnClickFunc: PropTypes.func,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    selected: PropTypes.bool,
    href: PropTypes.string,
    id: PropTypes.string,
    disabledClickable: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    secondary: PropTypes.bool,
    role: PropTypes.string,
    testId: PropTypes.string,
    text: PropTypes.string,
};

export default ActionButton;
