import classNames from "classnames";
import React from "react";
import Icon from "../../icon/Icon";

export default function CancelButton({ onClick, className, testId }) {
    return (
        <button
            className={classNames("cancel-btn", className)}
            onClick={onClick}
            type="button"
            data-testid={testId}
        >
            <Icon size="small" icon="cancel" />
        </button>
    );
}
