import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        borderBottom: "3px solid #f0f0f2",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 5,
        [theme.breakpoints.down('sm')]:{
            width: 250,
            border: "1px solid #f0f0f2",
            borderRadius: 10,
            padding: "0px 10px",
            display: 'inline-block',
            marginLeft: 8,

        }
    },
    nomreContainer: {
        marginLeft: 20,
        [theme.breakpoints.down('sm')]:{
            display: 'none',

        }
    },
    nomre: {
        color: "white",
        backgroundColor: "green",
        padding: "5px 10px",
        borderRadius: 5,
    },
    commentContainer: {
        width: "100%"
    },
    h4: {
        paddingBottom: 10,
        width: "100%",
        borderBottom: "1px solid #f0f0f2",
    },
    comment: {
        paddingBottom: 10,
        width: "100%",
        overflow: 'hidden',
        borderBottom: "1px solid #f0f0f2",
    },
    colorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',


    },
    color: {
        width: 15,
        height: 15,
        backgroundColor: "blue",
        borderRadius: "50%",
        marginRight: 10,
    },
    likeDisLikeRow:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    likeDisLikeContainer:{
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    yes:{
        '&:hover':{
            cursor: 'pointer',
        },
        width: 30,
        marginLeft: 5,  
        height: 30,
        backgroundColor: 'green',
        borderRadius: 3,
        color: "white",
        textAlign: 'center',
    },
    no:{
        '&:hover':{
            cursor: 'pointer',
        },
        width: 30,
        marginLeft: 5,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 3,
        color: "white",
        textAlign: 'center',
    },
    likeBox:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "5px 15px",
    }

}));

const SingleComment = ({title, detail, averageRating, likeCounts, disLikeCounts}) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.nomreContainer}><p className={classes.nomre}>{averageRating}</p></div>
                <div className={classes.commentContainer}>
                    <h4 className={classes.h4}>{title}</h4>
                    <p className={classes.comment}>{detail}</p>
                    <div className={classes.likeDisLikeRow}>
                        <div className={classes.colorContainer}>
                            <p className={classes.colorDesciption}>رنگ:</p>
                            <div className={classes.color}></div>

                        </div>
                        <div className={classes.likeDisLikeContainer}>
                            <p>ایا این دیدگاه مفید بود؟</p>
                            <div className={classes.likeBox}>
                                <p className={classes.no}>خیر</p>
                                <p>{disLikeCounts}</p>
                            </div>
                            <div className={classes.likeBox}>
                            <p className={classes.yes}>بله</p>
                            <p>{likeCounts}</p>

                            </div>


                        </div>
                    </div>

                </div>



            </div>

        </>
    )
}

export default SingleComment