import React from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import logo from "./../../asset/img/logo.svg"
import Drawer from '@material-ui/core/Drawer';
import MailIcon from '@material-ui/icons/Mail';
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import { makeStyles, Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import menuItems from "./../../data provider/menuItems";

const useStyles = makeStyles((theme) => ({
  listItemm: {
    padding: "8px 25px",
    width: 295,
  },
  accordionTitle: {
    width: 295,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemIcon: {
    marginLeft: 12,
  },
  accordionMain: {
    width: "100%",
  },
  listItemText: {
    fontSize: 14,
  },
  imgContainer: {
    textAlign: 'center',
    paddingTop: 20,
  },
  img: {
    width: 130,
    objectFit: 'cover',
  }
}));

const SideMenu = () => {
  const classes = useStyles();
  const { isOpenSideMenu, closeSideMenu } = useContext(AppContext);
  return (
    <>
      <Drawer anchor='right' open={isOpenSideMenu} onClose={closeSideMenu}>
        <div className={classes.imgContainer}>
          <img src={logo} className={classes.img} />
        </div>
        <Divider />

        <List>
          {['سوپر مارکت', 'پرفروش ترین ها', 'تخفیف ها و پیشنهاد ها', 'فروشنده شوید'].map((text, index) => (
            <ListItem className={classes.listItemm} button key={index}>
              <MailIcon className={classes.listItemIcon} />
              <p className={classes.listItemText}>{text}</p>
            </ListItem>
          ))}
        </List>
        <Divider />
        <nav>
        <List>
          {menuItems.map((text, index) => (
            <ListItem className={classes.accordionTitle} button key={index}>

              <Accordion className={classes.accordionMain}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className={classes.listItemText}>{text}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet,
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>
          ))}
        </List>
        </nav>
        
      </Drawer>
    </>

  );
}

export default SideMenu;
