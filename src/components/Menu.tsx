import React from "react";
import styled from "styled-components";
import { Menu as MuiMenu, Fade, MenuItem, ButtonBase } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const RepeatTypeMenuButton = styled(ButtonBase)`
    border: 3px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 24px;
    width: 80%;
    font-style: normal;
    font-family: Source Sans Pro;
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px;
    * {
        margin: 0px !important;
    }
`;

export default function Menu({ children }: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <RepeatTypeMenuButton
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {children} <ExpandMoreIcon style={{ margin: "0px" }} />
            </RepeatTypeMenuButton>
            <MuiMenu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Does not Repeat</MenuItem>
                <MenuItem onClick={handleClose}>Daily</MenuItem>
                <MenuItem onClick={handleClose}>Weekly on Thursday</MenuItem>
                <MenuItem onClick={handleClose}>
                    Monthly on the Fourth Thursday
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Monthly on the Last Thursday
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Annually on September 28
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Every weekday (Mon to Fri)
                </MenuItem>
                <MenuItem onClick={handleClose}>Custom...</MenuItem>
            </MuiMenu>
        </div>
    );
}
