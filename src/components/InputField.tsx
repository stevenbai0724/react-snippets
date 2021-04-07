import React from "react";
import styled from "styled-components";
import Field from "./Field";
import Label from "./Label";

const StyledInput = styled.input`
    width: 100%;
    border: 3px solid #cdcdcd;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 10px;
    font-style: normal;
    font-family: Source Sans Pro;
    ::placeholder {
        color: #cdcdcd;
    }
`;

const InputField = ({ label, value, placeholder, name, id, onChange }: any) => {
    return (
        <Field>
            <Label htmlFor={id}>{label}</Label>
            <StyledInput name={name} id={id} placeholder={placeholder} />
        </Field>
    );
};

export default InputField;
