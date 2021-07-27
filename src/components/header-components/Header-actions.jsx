import React from "react";
import {
    StyledHeaderActions,
    StyledHeaderCart,
    StyledHeaderActionsItemFav,
    StyledHeaderCartIcon, StyledHeaderActionsItemUser
} from "./Header-actions.styled";

const HeaderActions = () => {
    // const styleFav = {
    //     color: "#262F56",
    //     fontsize: "24px",
    //     transition: " color 0.3s ease",
    // }

    return (
        <StyledHeaderActions>
            <StyledHeaderActionsItemFav   href="" className="_icon-favorite"/>
            <StyledHeaderCart>
                <StyledHeaderCartIcon  className='_icon-cart'/>
            </StyledHeaderCart>
            <StyledHeaderActionsItemUser>
                <img src='../../img/avatar.svg' alt='avatar'/>
            </StyledHeaderActionsItemUser>
        </StyledHeaderActions>
    );
}

export default HeaderActions;