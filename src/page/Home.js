import { makeStyles, Container } from '@material-ui/core';
import React from 'react';
import Khandaniha from '../component/main/home/Khandaniha';
import Montakhab from '../component/main/home/Montakhab';
import Digiplus from '../component/main/home/Digiplus';
import Slider from '../component/main/home/Slider';

const useStyles = makeStyles((theme) => ({
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Slider />
      <Container>
        <Montakhab />
        <Digiplus />
        <Khandaniha />
      </Container>
    </>
  )
}

export default Home