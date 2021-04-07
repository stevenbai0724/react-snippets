import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;
    color: #133a4b;
`;

interface props {
    children: any;
    htmlFor?: string;
}

const Label = ({ children, htmlFor }: props) => {
    return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
