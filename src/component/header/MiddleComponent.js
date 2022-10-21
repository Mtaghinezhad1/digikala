import { makeStyles, InputBase, Button, Typography, Badge } from '@material-ui/core';
import { Input, LocalGroceryStoreOutlined, Search } from '@material-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from "./../../img/logo.svg";
import React from 'react';
import BadgeComponent from './BadgeComponent';


const useStyles = makeStyles((theme) => ({
  InputContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    height: 50,
    width: "100%",
    backgroundColor: "#f0f0f1",
    borderRadius: 10,

  },
  maincontainer: {
    [theme.breakpoints.up('md')]: {
      borderBottom: "none",
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5px 10px",
    borderBottom: "solid #f0f0f1 1px",
  },
  Rightcontainer: {
    width: 'calc(100% - 130px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftcontainer: {
    [theme.breakpoints.up('md')]: {
      width: "30%",
    },
    width: 120,
    textAlign: 'left',
    marginRight: 10,

  },
  InputBase: {
    width: "100%",
    padding: "0px 40px",
    width: "100%",
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: 13,
    color: "#a1a3a8",
  },
  inputTypography: {
    color: "#a1a3a8",
    position: 'absolute',
    right: 55,
    top: 13
  },

  logo: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    display: 'none',
  },
  signinBtnLG: {
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
    },
    display: 'none',
  },
  signinBtnSm: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    display: 'inline-block',
    textDecoration: 'none',
  },
  signinBtnSmContainer: {
    display: 'flex',
    width: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signinTypography: {
    color: "#62666d"
  },
  signinLogoSm: {
    color: "#62666d"
  }

}));

const MiddleComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.maincontainer}>
      <div className={classes.Rightcontainer}>
        <Link to={"/"} className={classes.logo}><img src={logo} /></Link>
        <div className={classes.InputContainer}>
          <InputBase className={classes.InputBase} />
          <Search className={classes.searchIcon} />
          <Typography className={classes.inputTypography}>جستجو</Typography>
        </div>

      </div>
      <div className={classes.leftcontainer}>
        <Button className={classes.signinBtnLG} onClick={() => navigate("/signup")} variant='outlined' startIcon={<Input />}> ورود | ثبت نام </Button>

        <Link to={"/signup"} className={classes.signinBtnSm}>
          <div className={classes.signinBtnSmContainer}>
            <Input className={classes.signinLogoSm} />
            <Typography className={classes.signinTypography}>ورود</Typography>
          </div>
        </Link>
        <BadgeComponent/>
      </div>
    </div>
  )
}

export default MiddleComponent