
import React from "react";

export const Header = ({ }) => {
    return (
        <header className="header">
            <h1 className="header__title">
                <img
                    src={"https://www.bayer.com/themes/custom/bayer_cpa/Bayer-logo-p.svg"}
                    alt="bayern-logo"
                    className="header__logo"
                />
            </h1>
        </header>
    );
};

export default Header;
