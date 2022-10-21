import { makeStyles, Container, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core';
import React from 'react';
import CardKhandaniha from './CardKhandaniha';

const useStyles = makeStyles((theme) => ({
    titrContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    blogContainer: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 5,
            
        }

    }
}));

const Khandaniha = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.khandaniha}>
                <div className={classes.titrContainer}>
                    <h4 className={classes.titr}>خواندنی ها</h4>
                    <a className={classes.moreLink}>مطالب بیشتر  در دیجی کالا مگ</a>
                </div>
                <div className={classes.blogContainer}>
                    <CardKhandaniha />
                    <CardKhandaniha />
                    <CardKhandaniha />
                    <CardKhandaniha />
                </div>
            </div>
        </>
    )
}

export default Khandaniha