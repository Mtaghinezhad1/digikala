import { makeStyles, Container, Grid, Button } from '@material-ui/core';
import React from 'react';
import SingleGrade from './SingleGrade';




const useStyles = makeStyles((theme) => ({

    mainContainer: {
        width: "80%",
        position: 'sticky',
        top: 10,
    },
    p: {
        marginTop: 50,
    },
    btn: {
        width: "100%",
        borderRadius: 10,
    },
    stars: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    gradeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    grade: {
        fontSize: 30,
        margin: 0,
        fontWeight: 600,
    },
    outOf:{
       fontSize: 13,
       marginRight: 5,

    }

}));

const Grades = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.gradeContainer}>
                    
                    <p className={classes.grade}>4</p>
                    <p className={classes.outOf}>از 5</p>
                </div>
                <div className={classes.stars}>
                    <img src="https://www.digikala.com/statics/img/png/star-yellow.png" />
                    <img src="https://www.digikala.com/statics/img/png/star-yellow.png" />
                    <img src="https://www.digikala.com/statics/img/png/star-yellow.png" />
                    <img src="https://www.digikala.com/statics/img/png/star-yellow.png" />
                    <img src="https://www.digikala.com/statics/img/png/star.png" />
                </div>
                <SingleGrade />
                <SingleGrade />
                <SingleGrade />
                <SingleGrade />
                <p className={classes.p}>شما هم در مورد این کالا نظر دهید.</p>
                <Button className={classes.btn} variant='outlined' color="secondary">ثبت نظر</Button>
            </div>





        </>
    )
}

export default Grades