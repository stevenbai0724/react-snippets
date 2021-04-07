import React from "react";
import styled from "styled-components";
import { StyledBackground } from "./WidgetPaper";
import Datepicker from "../components/Datepicker";
import Menu from "./Menu";
import TrashButton from "./TrashButton";
import { clone, pullAt, uniqueId } from "lodash";

const StyledButton = styled.button`
    padding: 15px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.32px;
    color: #5094b9;
    background: #ffffff;
    border: 3px solid #5094b9;
    box-sizing: border-box;
    border-radius: 12px;
    width: 70%;
    :hover {
        cursor: pointer;
    }
`;

const ShiftName = styled.h3`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 120%;
    margin: 0px;
    color: #133a4b;
`;

const NewShiftCardBackground = styled(StyledBackground)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    padding: 28px;
`;

const ShiftCardBackground = styled(StyledBackground)`
    height: 220px;
    padding: 28px;
    * {
        margin-bottom: 5px;
    }
`;

const ShiftHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ShiftContent = styled.div`
    margin-top: 30px;
`;

const StartEndDates = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface props {
    isNewShift?: boolean;
    setShifts: any;
    shifts: any[];
    i?: number;
}

const ShiftCard = ({ isNewShift = false, setShifts, shifts, i = 0 }: props) => {
    if (!isNewShift) {
        const { start, end, type, name } = shifts[i];
        const handleDelete = () => {
            const tmp = clone(shifts);
            pullAt(tmp, [i]);
            setShifts(tmp);
        };

        return (
            <ShiftCardBackground>
                <ShiftHeader>
                    <ShiftName>{name}</ShiftName>
                    <TrashButton onClick={handleDelete} />
                </ShiftHeader>
                <ShiftContent>
                    <StartEndDates>
                        <Datepicker label={"sdfsd"} date={start} />
                        <Datepicker label={"sdfsd"} data={end} />
                    </StartEndDates>
                </ShiftContent>
                <Menu>{type}</Menu>
            </ShiftCardBackground>
        );
    } else {
        const hanldeNewShiftButtonClick = () => {
            setShifts([
                ...shifts,
                {
                    start: new Date(),
                    end: new Date(),
                    type: "Does not Repeat",
                    name: `TEST ${uniqueId("ppp")}`,
                },
            ]);
        };
        return (
            <NewShiftCardBackground>
                <StyledButton onClick={hanldeNewShiftButtonClick}>
                    Create Another Shift
                </StyledButton>
            </NewShiftCardBackground>
        );
    }
};

export default ShiftCard;
