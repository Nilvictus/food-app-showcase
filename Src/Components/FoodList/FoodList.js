import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';
import FoodDetails from '../FoodDetails/FoodDetails';
import FoodQuantity from '../FoodQuantity/FoodQuantity';

const FoodList = () => {
    return (
        <TouchableOpacity style={styles.mainButton}>
            <Image source={Photos.pizza} style={styles.image} />
            <FoodDetails />
            <FoodQuantity />
        </TouchableOpacity>
    )
}

export default FoodList;