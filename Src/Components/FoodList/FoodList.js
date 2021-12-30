import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';
import FoodDetails from '../FoodDetails/FoodDetails';
import FoodQuantity from '../FoodQuantity/FoodQuantity';

const FoodList = () => {

    const [quantity, setQuantity] = useState(1);

    const addItem = () => {
      let x = quantity + 1;
      setQuantity(x);
    };
  
    const removeItem = () => {
      let x = quantity - 1;
      if (x < 1) {
        setQuantity(1);
      } else {
        setQuantity(x);
      }
    };
    return (
        <TouchableOpacity style={styles.mainButton}>
            <Image source={Photos.pizza} style={styles.image} />
            <FoodDetails />
            <FoodQuantity onPressAddItem={addItem} onPressRemoveItem={removeItem} quantity={quantity}/>
        </TouchableOpacity>
    )
}

export default FoodList;