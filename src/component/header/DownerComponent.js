import { makeStyles, Typography, Modal, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Location from "./Location";
import RightNav from "./RightNav";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5px 10px",
  },
  RightNavContainer: {
    width: "80%",
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
  },

  modal:{
    backgroundColor: "white",
    position:'fixed',
    top: "50%",
    right: "50%",
    height: 200,
    width: 500,
    borderRadius: 13,
  }
}));

const DownerComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.RightNavContainer}>
        <RightNav />
      </div>
      <Location/>
    </div >
  )
}

export default DownerComponent