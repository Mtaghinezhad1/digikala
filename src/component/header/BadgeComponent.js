import { makeStyles, Badge } from '@material-ui/core';
import { LocalGroceryStoreOutlined} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';

const useStyles = makeStyles((theme) => ({
  badgeIcon: {
    marginRight: 30,
    '&:hover':{
      cursor: 'pointer',
    }
  },
}));

const BadgeComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {cart, add1ToCart, remove1FromCart} = useContext(CartContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let number = 0;
    cart.map((item)=>{
      number = number + item.count;
    })
    setCount(number);
  }, [cart]);


  return (
        <Badge onClick={()=>navigate("/sabadekharid")} className={classes.badgeIcon} overlap="rectangular" badgeContent={count} color="secondary">
          <LocalGroceryStoreOutlined />
        </Badge>
  )
}

export default BadgeComponent