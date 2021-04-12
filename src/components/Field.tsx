import React from "react";
import styled from "styled-components";

const StyledField = styled.div`
    margin-bottom: 28px;
    input,
    textarea {
        margin-top: 8px;
    }
`;

interface props {
    children: any;
}

const Field = ({ children }: props) => {
    return <StyledField>{children}</StyledField>;
};

export default Field;
