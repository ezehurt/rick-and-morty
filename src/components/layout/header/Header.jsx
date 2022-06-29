
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { onChangeTerm } from "../../../state/search";

export const Header = () => {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const handleNavigateHome = ()=> {
        dispatch(onChangeTerm(""));
        history.push("");
    }
    return (
        <header className="header">
            <h1 className="header__title" onClick={handleNavigateHome}>
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
