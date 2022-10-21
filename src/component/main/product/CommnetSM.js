import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import SingleComment from './SingleComment';
import comments from '../../../data provider/comments';

const useStyles = makeStyles((theme) => ({
    titleRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    commentRow: {
        whiteSpace: 'nowrap',

        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',

        }
    },



}));

const CommentSM = ({ id }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.titleRow}>

                    <h4 className={classes.title}>دیگاه ها</h4>
                    <h4 className={classes.count}>1235 دیدگاه دیگر</h4>

                </div>
                <div className={classes.commentRow}>
                    {
                        comments.map((comment, index) => {
                            if (comment.productId == id) {
                                return (<SingleComment key={index} {...comment} />);
                            }
                        })
                    }

                </div>
            </div>


        </>
    )
}

export default CommentSM