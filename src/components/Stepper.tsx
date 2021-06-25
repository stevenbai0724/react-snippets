import React from "react";
import styled from "styled-components";

const StepperContainer = styled.ul`
    list-style: none;
    width: 100px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding: 0px;
`;

const Circle = styled.div<{ active: boolean }>`
    border: 4px solid ${(props) => (props.active ? "#026896" : "inherit")};
    box-sizing: border-box;
    border-radius: 50%;
    width: 41px;
    height: 41px;
    margin-left: -39px;
    margin-top: -11px;
    z-index: 1;
`;

const Step = styled.li<{ completed: boolean }>`
    position: relative;
    height: 137px;

    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    text-transform: uppercase;

    color: #000000;

    * {
        position: relative;
        top: -23px;
        left: 29px;
    }

    &:before {
        content: "";
        display: inline-block;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background-color: ${(props) =>
            props.completed ? " #026896" : "#cdcdcd"};
        z-index: ;
        // margin-top: 137px;
    }
    &:after {
        position: absolute;
        left: 0;
        top: 15%;
        content: "";
        border-left: 5px solid
            ${(props) => (props.completed ? " #026896" : "#cdcdcd")};
        margin-left: 8px;
        height: 85%;
        margin-top: -137px;
    }

    &:first-of-type:after {
        height: 0%;
    }
`;

const StepName = styled.p`
    margin: 0px;
    margin-left: 12px;
    top: -51px;
`;

interface props {
    steps: {
        name: string;
        active: boolean;
        completed: boolean;
    }[];
}

const Stepper = ({ steps }: props) => {
    // const steps = [
    //     {
    //         name: "Application Details",
    //         active: true,
    //         completed: true,
    //     },
    //     {
    //         name: "Basic Details",
    //         active: false,
    //         completed: false,
    //     },
    //     {
    //         name: "Opportunity Details",
    //         active: false,
    //         completed: false,
    //     },
    //     {
    //         name: "Review",
    //         active: false,
    //         completed: false,
    //     },
    // ];
    return (
        <StepperContainer>
            {steps.map(({ name, active, completed }) => (
                <Step completed={completed} key={name}>
                    <Circle active={active} />
                    <StepName>{name}</StepName>
                </Step>
            ))}
        </StepperContainer>
    );
};
export default Stepper;
