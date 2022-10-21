import React, { useState } from 'react';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, ListItem, Container, Grid, List, Typography, } from '@material-ui/core';
import { AppContext } from '../../context/ContextProvider';
import { useContext } from 'react';
import menuItems from '../../data provider/menuItems';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    right: "4%",
    transform: 'translateX(2%)',
    zIndex: 1000,
    backgroundColor: "white",
    width: "96%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    boxShadow: "0px 0px 10px 0px #888888",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

  },
  smallGrid: {
    borderLeft: "1px solid #f0f0f2",
  },
  bigGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemText: {
    fontSize: 14,
  }

}));

export default function () {
  const [menuNumber, setMenuNumber] = useState(0);
  const { isOpenToggleMenu } = useContext(AppContext);
  const classes = useStyles();

  const body = (
    <div className={classes.root} >
      <Grid container>
        <Grid item className={classes.smallGrid} md={3}>
          <nav>
            <List >
              {menuItems.map((text, index) => (
                <ListItem className={classes.listItemm} button key={index} onMouseOver={() => setMenuNumber(index)}>
                  <MailIcon className={classes.listItemIcon} />
                  <p className={classes.listItemText}>{text}</p>
                </ListItem>
              ))}
            </List>
          </nav>
        </Grid>
        <Grid className={classes.bigGrid} item md={8}>
          <h1>متن ساختگی {menuNumber}</h1>
        </Grid>
      </Grid>
    </div >
  );

  return (
    [isOpenToggleMenu && body]
  );
}
