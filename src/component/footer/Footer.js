import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import FirstComponent from './FirstComponent';
import Download from "./Download";


const useStyles = makeStyles((theme) => ({
  footer:{
    borderTop: "solid 1px #f0f0f1",
    paddingTop: 15,
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <FirstComponent />
        <Download/>
      </Container>
    </footer>
  )
}

export default Footer