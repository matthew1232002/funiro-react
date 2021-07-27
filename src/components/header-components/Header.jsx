import React from "react";
import {StyledHeader, StyledHeaderBody, StyledHeaderMain, StyledHeaderWrapper} from "./header.styled";
import HeaderMain from "./HeaderMain";
import HeaderSearch from "./Header-search";
import HeaderActions from "./Header-actions";

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderWrapper>
                <div className="container">
                    <StyledHeaderBody>
                        <HeaderMain/>
                        <HeaderSearch/>
                        <HeaderActions />
                    </StyledHeaderBody>
                </div>
            </StyledHeaderWrapper>
        </StyledHeader>
    );
}

export default Header;