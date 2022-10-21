import { makeStyles, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';


import React from 'react';


const useStyles = makeStyles((theme)=>({
  list:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5px 10px",
    borderLeft: "solid #f0f0f1 1px",
    '&:hover':{
      cursor: 'pointer',
    }
  },
  navigation:{
    padding: "5px 10px",
  },
  tag_a:{
    textDecoration: "none",
    color: "#62666d",
    marginLeft: 16,
    fontSize: 13,
  },
  p:{
    margin: 0,
    fontSize: 15,
    fontWeight: 700,
  }
}));

const LeftNav = () => {
  const { handleToggler} = useContext(AppContext);
    const classes = useStyles();
  return (
    <>
    <div onClick={handleToggler} className={classes.list}>
      <Menu/>
      <p className={classes.p}>دسته بندی کالا ها</p>

    </div>
    <div className={classes.navigation}>
        <a href='#' className={classes.tag_a}>سوالی دارید؟</a>
        <a href='#' className={classes.tag_a}>فروشنده شوید!</a>
        <a href='#' className={classes.tag_a}>شگفت انگیز ها</a>
        <a href='#' className={classes.tag_a}>تخفیف ها و پیشنهادات</a>
        <a href='#' className={classes.tag_a}>پرفروش ترین ها</a>
        <a href='#' className={classes.tag_a}>سوپر مارکت</a>
    </div>
    
    </>
  )
}

export default LeftNav