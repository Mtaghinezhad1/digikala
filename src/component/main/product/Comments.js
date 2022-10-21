import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import Grades from './Grades';
import SingleComment from './SingleComment';
import comments from "../../../data provider/comments"



const useStyles = makeStyles((theme) => ({
    p:{
        position: 'sticky',
        top: 100,
    }

}));

const Comments = ({id}) => {
    const classes = useStyles();
    return (
        <>
            <Container>
                <h4>امتیاز و دیدگاه کاربران</h4>

                <Grid container>
                    <Grid item md={4}>
                    <Grades/>
                    </Grid>
                    <Grid item md={8}>
                        {
                            comments.map((comment, index)=>{
                                if(comment.productId == id){
                                    return (<SingleComment key={index} {...comment}/>);
                                }
                            })
                        }

                    </Grid>
                </Grid>


            </Container>


        </>
    )
}

export default Comments