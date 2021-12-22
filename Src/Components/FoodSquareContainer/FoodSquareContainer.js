import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Photos from '../../Tools/ImageGroup';

const FoodSquareContainer = () => {
  return (
      <TouchableOpacity style={styles.main}>
        <Image source={Photos.pizza} style={styles.image} />
        <Text style={styles.text}>Food</Text>
      </TouchableOpacity>
  );
};

export default FoodSquareContainer;
