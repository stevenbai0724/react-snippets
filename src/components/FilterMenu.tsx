import React, { useState, MouseEvent } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    button: {
        background: "white",
        borderRadius: "24px",
        height: "40px",
        border: "2px solid #026896",
        padding: "10px",
        float: "right",
        marginLeft: "20px",
        fontSize: "16px",
    },
}));

type FilterMenuProps = {
    options: string[];
};

const FilterMenu = ({ options }: FilterMenuProps) => {
    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = useState(0);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (e: MouseEvent<HTMLElement>, i: number) => {
        setSelected(i);
        handleClose();
    };

    return (
        <div>
            <Button
                aria-controls="filter-menu"
                aria-haspopup="true"
                className={classes.button}
                onClick={handleClick}
            >
                {options[selected]}
                <ExpandMoreIcon />
            </Button>
            <Menu
                id="filter-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option: string, i: number) => {
                    return (
                        <MenuItem
                            key={option}
                            selected={i === selected}
                            onClick={(e) => handleSelect(e, i)}
                        >
                            {option}
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
};

export default FilterMenu;
