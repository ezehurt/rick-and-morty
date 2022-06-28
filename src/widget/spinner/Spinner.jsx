import React from "react";
import PropTypes from "prop-types";
import spinner from "../../www/img/spinner.gif";
import classNames from "classnames";

function Spinner({ className }) {
    return (
        <div
            className={classNames("spinner", className)}
            data-testid="main-spinner-testid"
        >
            <img className="spinner__image" src={spinner} alt="Loading" />
        </div>
    );
}

Spinner.propTypes = {
    className: PropTypes.string,
};

export default Spinner;
