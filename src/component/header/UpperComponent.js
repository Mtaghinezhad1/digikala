import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Menu, HelpOutline } from '@material-ui/icons';
import SideMenu from './SideMenu';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { Link } from 'react-router-dom';
import logo from "./../../asset/img/logo.svg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
      borderBottom: "none",

    },
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "5px 10px",
    borderBottom: "solid #f0f0f1 1px"
  },
  menuIcon: {
    '&:hover': {
      cursor: 'pointer',
    }
  }
}));

const UpperComponent = () => {
  const classes = useStyles();
  const { openSideMenu } = useContext(AppContext);


  return (
    <div className={classes.mainContainer}>
      <Menu onClick={openSideMenu} className={classes.menuIcon} />
      <Link to={"/"}><img src={logo} /></Link>
      <HelpOutline />
      <SideMenu />
    </div>
  )
}

export default UpperComponent