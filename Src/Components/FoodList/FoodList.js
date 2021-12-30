import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';
import FoodDetails from '../FoodDetails/FoodDetails';
import FoodQuantity from '../FoodQuantity/FoodQuantity';

type Props = {
  foodDetails: ?void,
  calculate: ?void,
};

const FoodList = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [foodPrice, setFoodPrice] = useState(props.foodDetails.price);

  const calculateFoodPrice = x => {
    let price = parseFloat(props.foodDetails.price) * x;
    setFoodPrice(price.toFixed(2));
  };

  const addItem = () => {
    let x = quantity + 1;
    setQuantity(x);

    calculateFoodPrice(x);
    props.calculate;
  };

  const removeItem = () => {
    let x = quantity - 1;
    if (x < 1) {
      setQuantity(1);
      calculateFoodPrice(1);
    } else {
      setQuantity(x);
      calculateFoodPrice(x);
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
