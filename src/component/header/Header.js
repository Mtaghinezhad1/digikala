import React from 'react';
import { makeStyles } from '@material-ui/core';
import DownerComponent from './DownerComponent';
import UpperComponent from './UpperComponent';
import MiddleComponent from './MiddleComponent';


const useStyles = makeStyles((theme) => ({
  img: {
    height: 35,
    objectFit: 'cover',
    width: "100%",
    [theme.breakpoints.up('sm')]:{
      height: 60,
    }
  },
  ps: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  header: {
    boxShadow: "0px 0px 3px 0px grey",
    [theme.breakpoints.down('sm')]: {
      borderBottom: "1px solid #f0f0f2",
      boxShadow: "none",

    }
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <a href='https://www.digikala.com' ><img className={classes.img} alt='ad' src="https://dkstatics-public.digikala.com/digikala-adservice-banners/effa79ac5c2e1179a179330cde4cdf9609176241_1666181323.jpg?x-oss-process=image/quality,q_95" /></a>
      <UpperComponent className={classes.upper} />
      <MiddleComponent />
      <DownerComponent />
      

    </header>

  )
}

export default Header