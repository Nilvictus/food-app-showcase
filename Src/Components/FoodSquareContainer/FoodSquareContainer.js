import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Photos from '../../Tools/ImageGroup';

type Props = {
  homeStyle: ?void,
  foodDetails: ?string,
  imgSource: ?String,
  onPress: ?void,
}

const FoodSquareContainer = (props: Props) => {
  return (
      <TouchableOpacity style={[styles.main, props.homeStyle]} onPress={props.onPress}>
        <Image source={props.foodDetails.source} style={styles.image} />
        <Text style={styles.text}>{props.foodDetails.name}</Text>
      </TouchableOpacity>
  );
};

export default FoodSquareContainer;
