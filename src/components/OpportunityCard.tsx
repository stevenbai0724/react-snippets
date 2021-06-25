import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import {useState} from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 12,
            display: "flex",
            padding: 18,
            margin: "auto",
            // maxWidth: 1000,
            width: "100%",
            boxShadow: "0px 4px 20px rgba(80, 80, 80, 0.1)",
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
            fontSize: "20px",
        },
        button: {
            backgroundColor: "#026896",
            borderRadius: "24px",
            "&:hover": {
                cursor: "pointer",
            },
            color: "white",
            border: "none",
            fontSize: "16px",
            padding: "16px",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontWeight: 600,
        },
    })
);

function getDateString(date: Date) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [m, d, y] = new Date(date).toLocaleDateString().split("/");

    return `${months[Number(m) - 1]} ${d}, ${y}`;
}
const image =
    "https://www.baywardbulletin.ca/wp-content/uploads/2019/07/Bluesfest-873x436.jpg";
export default function OpportunityCard({ opportunity: content }: any) {
    const classes = useStyles();
    const [openModal, toggleModal] = useState(false)
    const { companyName, eventName, subtitle, address, start } = content;
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
            />

            <div className={classes.details}>
                <CardContent>
                    <Typography
                        component="h2"
                        variant="h2"
                        color="textSecondary"
                        className={classes.date}
                    >
                        {getDateString(start)}
                    </Typography>
                    <Typography
                        component="h5"
                        variant="h5"
                        className={classes.font}
                    >
                        <strong>{eventName}</strong> | {subtitle}
                    </Typography>

                    <br />
                    <Typography variant="subtitle1" className={classes.font16}>
                        {companyName}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        className={classes.font16}
                    >
                        {address}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button className={classes.button} onClick={() => {toggleModal(!openModal)}}>View Event</button>
                </CardActions>
            </div>

        </Card>
    );
}
