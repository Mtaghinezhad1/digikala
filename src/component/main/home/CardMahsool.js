import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    media: {
        [theme.breakpoints.up('md')]: {
            height: 150,
            width: 150
        },
        [theme.breakpoints.only('sm')]: {
            height: 210,
            width: 210,
        },
        objectFit: 'cover',
        width: "100%",

    },
    container: {
        
        [theme.breakpoints.up('md')]: {
            width: "18%",
            margin: "10px 5px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "45%",
            margin: "10px 5px"
        },

    },
    imgContainer:{
        textAlign: 'center',
    },
    takhfif: {
        backgroundColor: "red",
        padding: "5px 10px",
        borderRadius: 100,
    },
    takhfifSpan: {
        color: "white",
        fontWeight: 'bold',
    },
    gheymatContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    biTakhfif: {
        textDecoration: 'line-through',
        color: "#c0c2c5",
    }
}));

const CardMahsool = ({id, price, realPrice, image, percentage}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <>
            <Card className={classes.container}>
                <CardActionArea onClick={()=>navigate(`product/${id}`)} >
                    <div className={classes.imgContainer}>
                        <img className={classes.media} src={image}/>
                    </div>
                    <CardContent>
                        <div className={classes.gheymatContainer}>
                            <div className={classes.baTakhfif}>
                                <span className={classes.baTakhfifSpan}>{price} تومان</span>
                            </div>
                            <div className={classes.takhfif}>
                                <span className={classes.takhfifSpan}>{percentage}%</span>
                            </div>
                        </div>

                        <span className={classes.biTakhfif}>{realPrice}</span>

                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}

export default CardMahsool
