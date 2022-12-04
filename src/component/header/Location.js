import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ArrowLeft, Close, LocationCity, LocationOnOutlined, ChevronLeftOutlined } from '@material-ui/icons';

import cities from '../../data provider/cities';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.up('md')]: {
      borderRadius: 10,
      width: 400,
      height: 600,
      top: "50%",
      left: "50%",
      transform: "translate( -50% , -50%)",
    }
  },
  locationContainerFlex: {
    [theme.breakpoints.up('md')]: {
      width: "20%",
      justifyContent: 'flex-end',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  locationTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontSize: 14,
    margin: 0,
  },
  locationContainer: {
    overflowY: 'scroll',
    height: 550
  },
  cityRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: "1px solid #f0f0f2",
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,

    }
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: "1px solid #f0f0f2",
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 50,

    }
  },
  locationRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  location: {
    color: "#19bfd3",
    marginRight: 10,
  },
  locationIcon: {
    color: "#19bfd3",

  },
  closeIcon: {
    '&:hover': {
      cursor: 'pointer',
    }
  }
}));

export default function Location({ children }) {
  const classes = useStyles();
  const [openModal ,setOpenModal] = useState(false);


  const body = (
    <div className={classes.paper}>
      <div className={classes.titleRow}>
        <p className={classes.title}>انتخاب شهر</p>
        <Close className={classes.closeIcon} onClick={()=>setOpenModal(false)} />
      </div>
      <div className={classes.locationContainer}>
        <div className={classes.locationRow}>
          <LocationCity className={classes.locationIcon} />
          <p className={classes.location}>انتخاب شهر</p>
        </div>

        {
          cities.map((city, index) => {
            return (
              <div className={classes.cityRow} key={index}>
                <p className={classes.title}>{city}</p>
                <ArrowLeft />
              </div>
            )
          })
        }
      </div>

    </div>
  );

  return (
    <>
      <div onClick={()=>setOpenModal(true)} className={classes.locationContainerFlex} >
        <div className={classes.locationTextContainer}>
          <LocationOnOutlined />
          <p className={classes.locationText}>
            لطفا شهر خود را وارد کنید
          </p>
        </div>
        <ChevronLeftOutlined />
      </div>
      <div>
        <Modal
          open={openModal}
          onClose={()=>setOpenModal(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>

  );
}
