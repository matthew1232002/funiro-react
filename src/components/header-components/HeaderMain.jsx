import React from "react";
import {
    StyledHeaderLogo,
    StyledHeaderMain,
    StyledHeaderMenuBody,
    StyledHeaderMenuItem,
    StyledHeaderMenuList, StyledHeaderMenuSubItem, StyledHeaderMenuSubList
} from "./HeaderMain.styled";
import {StyledLink, StyledSubLink} from "../styles/Link.styled";
import {StyledButtonArrow} from "../styles/Button.styled";

const HeaderMain = () => {
    const menuStyle = {
        flex: "0 1 420px",
    }
    return (
        <StyledHeaderMain>
            <StyledHeaderLogo>Funiro.</StyledHeaderLogo>
            <div style={menuStyle}>
                <StyledHeaderMenuBody>
                    <StyledHeaderMenuList>
                        <StyledHeaderMenuItem>
                            <StyledLink>Products</StyledLink>
                            <StyledButtonArrow className='_icon-arrow-down'/>
                            <StyledHeaderMenuSubList>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Product #1</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Product #2</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Product #3</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Product #4</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                            </StyledHeaderMenuSubList>
                        </StyledHeaderMenuItem>
                        <StyledHeaderMenuItem>
                            <StyledLink>Rooms</StyledLink>
                            <StyledButtonArrow className='_icon-arrow-down'/>
                            <StyledHeaderMenuSubList>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Room #1</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Room #2</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Room #3</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                                <StyledHeaderMenuSubItem>
                                    <StyledSubLink>Room #4</StyledSubLink>
                                </StyledHeaderMenuSubItem>
                            </StyledHeaderMenuSubList>
                        </StyledHeaderMenuItem>
                        <StyledHeaderMenuItem>
                            <StyledLink>Inspiration</StyledLink>
                            <StyledButtonArrow className='_icon-arrow-down'/>
                        </StyledHeaderMenuItem>
                    </StyledHeaderMenuList>
                </StyledHeaderMenuBody>
            </div>
        </StyledHeaderMain>
    );
}

export default HeaderMain;