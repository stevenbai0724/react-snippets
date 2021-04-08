import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from '@material-ui/core/TextField';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 12,
            display: "flex",
            padding: 18,
            margin: "15px",
            width: "40%",
            boxShadow: "0px 4px 20px rgba(80, 80, 80, 0.1)",
            "&:hover": {
                boxShadow: "0px 4px 20px rgba(25, 180, 204, 0.5)",
            },
        },
        details: {
            display: "flex",
            flexDirection: "column",
            marginTop: "-18px",
            marginLeft: "20px",
        },
        media: {
            position: "relative",
            borderRadius: 12,
            width: 300,
            maxHeight: 200,
        },
        date: {
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "10px",
        },
        font16: {
            fontSize: "16px",
        },

        font: {
            fontSize: "40px",
        },
        button: {
            backgroundColor: "white",
            borderRadius: "20px",
            "&:hover": {
                cursor: "pointer",
            },
            color: "#026896",
            border: "3px solid #026896",
            fontSize: "16px",
            padding: "16px",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontWeight: 600,
            width: "80%",
            marginTop:"20px",
            margin: "auto"
        },
        buttonPressed: {
            backgroundColor: "#026896",
            borderRadius: "20px",
            "&:hover": {
                cursor: "pointer",
            },
            color: "white",
            border: "3px solid #026896",
            fontSize: "16px",
            padding: "16px",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontWeight: 600,
            width: "80%",
            marginTop:"20px",
            margin: "auto"
        },
        input: {
            border: "3px solid #026896",
            borderRadius: "24px",
        }
    })
);

const ApplicationCard = ({ content }: any) => {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }
    
    return (
        <Card className={classes.root} onClick={handleClick}>

            <div className={classes.details}> 
                <CardContent>
                    <Typography
                        component="h5"
                        variant="h5"
                        className={classes.font}
                    >
                        {content.header}
                    </Typography>

                    <br />
                    <Typography variant="subtitle1" className={classes.font16}>
                        {content.details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button className={clicked ? classes.buttonPressed : classes.button}>{content.button}</button>
                </CardActions>
                <Input disabled={true} className={classes.input} disableUnderline={true}></Input>
            </div>
        </Card>
    );
}

export default ApplicationCard
