import { Hidden, makeStyles } from '@material-ui/core';
import { ArrowRight, ArrowLeft } from '@material-ui/icons';
import React from 'react';
import { useState, useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
    },
    img: {
        height: 300,
        objectFit: 'cover',
        display: 'none',
    },
    activeImg: {
        [theme.breakpoints.down('sm')]:{
            height: 250,
        },
        height: 300,
        width: "100%",
        objectFit: 'cover',
    },
    dotContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        right: "50%",
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: "grey",
        opacity: "0.5",
        borderRadius: "50%",
        display: 'block',
        margin: 2,
        '&:hover': {
            cursor: 'pointer',
        }
    },
    activeDot: {
        width: 25,
        height: 10,
        backgroundColor: "white",
        opacity: "0.7",
        borderRadius: 50,
        display: 'block',
        margin: 2,
        '&:hover': {
            cursor: 'pointer',
        }
    },
    arrowContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: "50%",
        top: "50%",
        width: "100%",
        boxSizing: 'border-box',
        padding: 10,
    },
    arrow: {
        background: "white",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "50%",
        '&:hover': {
            cursor: 'pointer',
        }
    }
}));

const Slider = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const banners = ["https://dkstatics-public.digikala.com/digikala-adservice-banners/33b562aa947fa56698fc425fbb9aeeef179bcbb2_1665582693.jpg?x-oss-process=image/quality,q_95",
     "https://dkstatics-public.digikala.com/digikala-adservice-banners/087f9232769edae07fad6e618621782df6b84826_1665496888.jpg?x-oss-process=image/quality,q_95",
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/d48f288aab0ca97730144164bd141c8baec66a8c_1666018516.jpg?x-oss-process=image/quality,q_95"];


    useEffect(() => {
        let interrrval = setInterval(() => {
            indexController(index + 1)
        }, 5000);
        return () => clearInterval(interrrval)
    }, [index]);

    const indexController = (number) => {
        if (number > 2) {
            return setIndex(0)
        }
        if (number < 0) {
            return setIndex(2)
        }

        return setIndex(number);
    }


    return (

        <div className={classes.container}>

            {banners.map((bnr, bnrIndex) => {
                if (bnrIndex === index) {
                    return (
                        <img key={bnrIndex} className={classes.activeImg} src={bnr} />
                    )
                } else {
                    return (
                        <img key={bnrIndex} className={classes.img} src={bnr} />
                    )
                }
            })}


            <div className={classes.dotContainer}>
                {banners.map((bnr, bnrIndex) => {
                    if (bnrIndex === index) {
                        return (
                            <div key={bnrIndex} className={classes.activeDot} value={bnrIndex}></div>
                        )
                    } else {
                        return (
                            <div key={bnrIndex} className={classes.dot} value={bnrIndex} onClick={(e) => { setIndex(bnrIndex) }} ></div>
                        )
                    }
                })}
            </div>


            <div className={classes.arrowContainer}>
                <div className={classes.arrow} onClick={() => indexController(index + 1)}>
                    <ArrowRight />
                </div>
                <div className={classes.arrow} onClick={() => indexController(index - 1)}>
                    <ArrowLeft />
                </div>
            </div>


        </div>



    )
}

export default Slider