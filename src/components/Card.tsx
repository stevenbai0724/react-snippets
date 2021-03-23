import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import emptyImage from './Header/img/empty.jpg'
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 771,
      maxHeight: 260.47,
      borderRadius: 12,
    },
    media: {
        position: "relative",
        width: 256,
        height: 188,
        top: -100,
        left: 20,
        borderRadius: 12,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    header: {
        position: "relative",
        left: 303.11,
        top: 50.52,
        width: "50%",
        
    },
    title : {
      fontSize: 20,
      fontWeight: 400,
    },
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardHeader
      
        className = {classes.header}
        subheader="RBC Bluesfest Ottawa,ON"
        title="Cash Handler Beer Booth Day 1 | Royal Bank of Canada Bluesfest"
        
      />
      <CardMedia
        className={classes.media}
        image = {emptyImage}
        title="Empty Image Holder"
      />
      <CardActions>
        <Button size = "small" color = "primary">View Event</Button> 
      </CardActions> 
    </Card>
  );
}