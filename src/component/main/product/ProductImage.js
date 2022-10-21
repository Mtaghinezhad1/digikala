import { makeStyles} from '@material-ui/core';
import { LinkedIn, FavoriteBorder, NotificationsActive, ShareOutlined, List } from '@material-ui/icons';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    colorListContainer: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        display: 'none',
        width: "100%",
    },
    colorContainer: {
        width: "22%",
        border: "1px solid #a1a3a8",
        borderRadius: 10,

    },
    mainContainer: {
        [theme.breakpoints.down('sm')]: {
            backgroundColor: "white",
            borderBottom: "1px solid #f0f0f2"

        }
    },
    mainImg: {
        width: "100%",
        objectFit: 'cover',

    },
    subImg: {
        width: "100%",
    },
    imgContainer: {
        marginTop: 16,
        [theme.breakpoints.up('md')]: {
            marginBottom: 50,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
    },
    iconContainer: {
        marginTop: 20,
        textAlign: 'left',

    },
    icon: {
        marginLeft: 20,
    },
    h4: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        display: 'block',
    }
}));

const ProductImage = ({image, title}) => {
    const classes = useStyles();
    console.log(title);
    return (
        <>

            <div className={classes.mainContainer}>
                <div className={classes.imgContainer}>
                    <div className={classes.iconContainer}>
                        <FavoriteBorder className={classes.icon} />
                        <ShareOutlined className={classes.icon} />
                        <NotificationsActive className={classes.icon} />
                        <LinkedIn className={classes.icon} />
                        <ShareOutlined className={classes.icon} />
                        <List className={classes.icon} />
                    </div>
                    <img className={classes.mainImg} src={image} />
                </div>
                <div className={classes.colorListContainer}>
                    <div className={classes.colorContainer}>
                        <img className={classes.subImg} src="https://dkstatics-public.digikala.com/digikala-products/d385119eb33315e3e7a625d18ef9f0d0afd8bf07_1655022997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" />
                    </div>
                    <div className={classes.colorContainer}>
                        <img className={classes.subImg} src="https://dkstatics-public.digikala.com/digikala-products/d385119eb33315e3e7a625d18ef9f0d0afd8bf07_1655022997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" />
                    </div>
                    <div className={classes.colorContainer}>
                        <img className={classes.subImg} src="https://dkstatics-public.digikala.com/digikala-products/d385119eb33315e3e7a625d18ef9f0d0afd8bf07_1655022997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" />
                    </div>
                    <div className={classes.colorContainer}>
                        <img className={classes.subImg} src="https://dkstatics-public.digikala.com/digikala-products/d385119eb33315e3e7a625d18ef9f0d0afd8bf07_1655022997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" />
                    </div>
                </div>
                <h4 className={classes.h4}>{title}</h4>
            </div>

        </>
    )
}

export default ProductImage