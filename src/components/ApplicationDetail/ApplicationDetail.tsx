import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import ApplicationCard from "./ApplicationCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "80%",
        },
        cardContainer: {
            display: "flex",
        },
        header: {
            // margin: "15px"
        },
        title: {
            font: "50px",
        },
        details: {
            font: "16px",
            color: "grey",
        },
    })
);

const ApplicationDetails = () => {
    const classes = useStyles();
    const [contents, setContents] = useState([
        {
            header: "iContribute",
            details:
                "Choose to recieve applications throught iContribute, and we'll store all the opportunity details and provide applicants your email address.",
            button: "Host on iContribute",
            link: false,
        },
        {
            header: "External Website",
            details:
                "Have a volunteer opportunity on your website? Provide a link and we'll redirect applicants to your organization's website directly to apply",
            button: "Add Your Site Link",
            link: true,
        },
    ]);

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography
                    component="h4"
                    variant="h4"
                    className={classes.title}
                >
                    How to Apply
                </Typography>
                <Typography variant="subtitle1" className={classes.details}>
                    Choose to receive applications through iContribute or
                    redirect volunteers to an external link
                </Typography>
            </div>
            <div className={classes.cardContainer}>
                {contents.map((c) => (
                    <ApplicationCard content={c} />
                ))}
            </div>
        </div>
    );
};

export default ApplicationDetails;
