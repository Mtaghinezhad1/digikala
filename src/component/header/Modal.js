import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { ArrowLeft, Close, LocationCity } from '@material-ui/icons';
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

export default function SimpleModal() {
  const classes = useStyles();
  const { isOpenModal, closeModal } = useContext(AppContext);


  const body = (
    <div className={classes.paper}>
      <div className={classes.titleRow}>
        <p className={classes.title}>انتخاب شهر</p>
        <Close className={classes.closeIcon} onClick={closeModal} />
      </div>
      <div className={classes.locationContainer}>
        <div className={classes.locationRow}>
          <LocationCity className={classes.locationIcon} />
          <p className={classes.location}>انتخاب شهر</p>
        </div>

        {
          cities.map((city,index) => {
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
    <div>
      <Modal
        open={isOpenModal}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

        {body}
      </Modal>
    </div>
  );
}
