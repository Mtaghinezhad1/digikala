import { makeStyles, Typography, Modal, Button } from '@material-ui/core';
import { LocationOnOutlined, ChevronLeftOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import RightNav from "./RightNav";
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5px 10px",
  },
  location: {
    [theme.breakpoints.up('md')]: {
      width: "20%",
      justifyContent: 'flex-end',
    },
    '&:hover':{
      cursor: 'pointer',
    },
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

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
  locationTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    backgroundColor: "white",
    position:'fixed',
    top: "50%",
    right: "50%",
    height: 200,
    width: 500,
    borderRadius: 13,

  },
  modalContainer:{
    width: "100%",
    height: "100%",
  },
  locationText:{
    fontSize: 14,
    margin: 0,
  }
}));

const DownerComponent = () => {
  const classes = useStyles();
  const {openModal} = useContext(AppContext);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.RightNavContainer}>
        <RightNav />
      </div>
      <div onClick={openModal} className={classes.location} >
        <div  className={classes.locationTextContainer}>
          <LocationOnOutlined />
          <p className={classes.locationText}>
            لطفا شهر خود را وارد کنید
          </p>
        </div>
        <ChevronLeftOutlined />
      </div>



    </div >
  )
}

export default DownerComponent