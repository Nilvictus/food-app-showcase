import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import Icon from '../../Tools/IconGroup';

type Props = {
    onPressRemoveItem: ?void,
    onPressAddItem: ?void,
    quantity: ?number,
}

const FoodQuantity = (props: Props) => {

  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={props.onPressRemoveItem}>
        <Image source={Icon.removeItem} style={styles.removeIcon} />
      </TouchableOpacity>
      <Text style={styles.quantityNumber}> {props.quantity} </Text>
      <TouchableOpacity onPress={props.onPressAddItem}>
        <Image source={Icon.addItem} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default FoodQuantity;
