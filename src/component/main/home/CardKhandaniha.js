import { makeStyles, Container, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 280,
        objectFit: 'cover',
        [theme.breakpoints.up('md')]: {
            height: 160,
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: 'auto',
        }
    },
    KhodCard: {
        [theme.breakpoints.up('md')]: {
            width: "23%",
        },
        marginBottom: 10,
    }
}));

const CardKhandaniha = () => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.KhodCard}>
                <CardActionArea>
                    <div className={classes.imgContainer} >
                        <img className={classes.media} src="https://www.digikala.com/mag/wp-content/uploads/2022/10/Untitled-8-2-610x380.jpg" />
                    </div>
                    <CardContent>
                        بررسی برد گیم صندوقچه جنگ، اقتصاد نظامی
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}

export default CardKhandaniha
