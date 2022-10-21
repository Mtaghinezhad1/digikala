import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import SingleComment from './SingleComment';



const useStyles = makeStyles((theme) => ({
    progressBar: {
        width: "100%",
        backgroundColor: "#f0f0f1",
        height: 10,
        borderRadius: 50,
        padding: 0,
    },
    compeleted: {
        width: "80%",
        backgroundColor: "#19bfd3",
        height: "100%",
        borderRadius: 50,
        padding: 0,
    },
    mainContainer:{
        width: "80%",
    },
    p:{
        
    }

}));

const SingleGrade = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>
                <p className={classes.p}>کیفیت ساخت:</p>
                <div className={classes.progressBar}>
                    <div className={classes.compeleted}>

                    </div>
                </div>
            </div>



        </>
    )
}

export default SingleGrade