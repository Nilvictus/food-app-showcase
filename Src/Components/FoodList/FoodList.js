import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';
import FoodDetails from '../FoodDetails/FoodDetails';
import FoodQuantity from '../FoodQuantity/FoodQuantity';
import {useDispatch, useSelector} from 'react-redux';
import {
  setFoodPriceRedux,
  setTotalPriceRedux,
  setFoodData,
} from '../../Services/Redux/Actions/Index';

type Props = {
  foodDetails: ?void,
  calculate: ?void,
};

const FoodList = (props: Props) => {
  const dispatch = useDispatch();
  const foodPriceRedux = useSelector(state => state.foodReducer.foodPrice);
  const foodTotalPriceRedux = useSelector(
    state => state.foodReducer.foodTotalPrice,
  );
  const foodDataRedux = useSelector(state => state.foodReducer.foodData);

  console.log('see the basket quantity', props.foodDetails.quantity);

  const [quantity, setQuantity] = useState(props.foodDetails.quantity);
  const [foodPrice, setFoodPrice] = useState(
    (props.foodDetails.price * props.foodDetails.quantity).toFixed(2),
  );

  const calculateFoodPrice = (x, action) => {
    let price = parseFloat(props.foodDetails.price) * x;
    setFoodPrice(price.toFixed(2));

    if (action === 'addItem') {
      let totalPriceRedux =
        foodTotalPriceRedux + parseFloat(props.foodDetails.price);
      dispatch(setTotalPriceRedux(totalPriceRedux));
    } else if (action === 'removeItem') {
      let totalPriceRedux =
        foodTotalPriceRedux - parseFloat(props.foodDetails.price);
      dispatch(setTotalPriceRedux(totalPriceRedux));
    }
  };

  const addItem = () => {
    let x = quantity + 1;
    setQuantity(x);

    calculateFoodPrice(x, 'addItem');
    props.calculate;
  };

  const removeItem = () => {
    let x = quantity - 1;
    if (x < 1) {
      setQuantity(1);
      calculateFoodPrice(1, 'minOrder');
    } else {
      setQuantity(x);
      calculateFoodPrice(x, 'removeItem');
    }
    props.calculate;
  };

  return (
    <TouchableOpacity style={styles.mainButton}>
      <Image source={props.foodDetails.source} style={styles.image} />
      <FoodDetails foodDetails={props.foodDetails} foodPrice={foodPrice} />
      <FoodQuantity
        onPressAddItem={addItem}
        onPressRemoveItem={removeItem}
        quantity={quantity}
      />
    </TouchableOpacity>
  );
};

export default FoodList;
