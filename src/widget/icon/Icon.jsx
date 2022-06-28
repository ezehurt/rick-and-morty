import React from 'react'

import { ReactComponent as ArrowLeft } from "../../www/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../www/icons/arrow-right.svg";
import { ReactComponent as Cancel } from "../../www/icons/cancel.svg";
import { ReactComponent as Search } from "../../www/icons/search.svg";


function Icon({ size, icon, color }) {
    let Display = null;
    switch (icon) {
        case 'arrow-left':
            Display = ArrowLeft
            break;
        case 'arrow-right':
            Display = ArrowRight
            break;
        case 'arrow-up':
        case 'cancel':
            Display = Cancel
            break;
        case 'search':
            Display = Search
            break;

        default:
            Display = Cancel
            break
    }
    return (
        <Display
            viewBox="0 0 20 20"
            preserveAspectRatio="xMidYMid meet"
            className={`icon icon-svg--${size} icon-svg-${icon} icon-svg--${color}`}
        />
    )
}

export default Icon
