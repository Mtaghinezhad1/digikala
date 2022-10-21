import { makeStyles } from '@material-ui/core';

import React from 'react';


const useStyles = makeStyles((theme)=>({
  tag_a:{
    textDecoration: "none",
  }
}));

const LeftNav = () => {
    const classes = useStyles();
  return (
    <div>
        <a href='#' className={classes.tag_a}>سوالی دارید؟</a>
        <a href='#' className={classes.tag_a}>فروشنده شوید!</a>
        <a href='#' className={classes.tag_a}>شگفت انگیز ها</a>
        <a href='#' className={classes.tag_a}>تخفیف ها و پیشنهادات</a>
        <a href='#' className={classes.tag_a}>پرفروش ترین ها</a>
        <a href='#' className={classes.tag_a}>سوپر مارکت</a>
    </div>
  )
}

export default LeftNav