import { makeStyles, Container, Grid } from '@material-ui/core';
import { } from '@material-ui/icons';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        [theme.breakpoints.down('sm')]:{
            borderBottom: "1px solid #f0f0f2",
        }
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    ul: {
        padding: 0,
    },
    p1: {
        color: "#81858b",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 0.6,

    },
    p2: {
        fontWeight: 600,
        fontSize: 15,
        marginRight: 5,
        lineHeight: 0.6,
    },

}));

const Details = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>

                <ul className={classes.ul}>
                    <h4>ویژگی ها</h4>
                    <li className={classes.list}>
                        <p className={classes.p1}>فناوری صفحه نمایش:</p>
                        <p className={classes.p2}>Super AMOLED</p>
                    </li>
                    <li className={classes.list}>
                        <p className={classes.p1}>فناوری صفحه نمایش:</p>
                        <p className={classes.p2}>Super AMOLED</p>
                    </li>
                    <li className={classes.list}>
                        <p className={classes.p1}>فناوری صفحه نمایش:</p>
                        <p className={classes.p2}>Super AMOLED</p>
                    </li>
                    <li className={classes.list}>
                        <p className={classes.p1}>فناوری صفحه نمایش:</p>
                        <p className={classes.p2}>Super AMOLED</p>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Details