import React from "react";
import {
    StyledHeaderSearch,
    StyledHeaderSearchForm,
    StyledHeaderSearchFormBtn,
    StyledHeaderSearchFormIcon, StyledHeaderSearchFormInput,
    StyledHeaderSearchFormItem
} from "./Header-search.styled";

const HeaderSearch = () => {
    return (
        <StyledHeaderSearch>
            <StyledHeaderSearchForm>
                <StyledHeaderSearchFormIcon className="_icon-search"/>
                <StyledHeaderSearchFormItem>
                    <StyledHeaderSearchFormBtn type="submit" className="_icon-search"/>
                    <StyledHeaderSearchFormInput autoComplete="off" type="text" name="form[]"
                                                 placeholder="Search for minimalist chair"/>
                </StyledHeaderSearchFormItem>
            </StyledHeaderSearchForm>
        </StyledHeaderSearch>
    );
}

export default HeaderSearch;