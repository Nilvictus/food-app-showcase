import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';

const FoodDetails = () => {
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.textPrice}>$28.00</Text>
            <Text style={styles.textDescription}>Tasty Italian Piads</Text>
            <Image source={Icon.rateStar} style={styles.star}/>
        </View>
    )
}

export default FoodDetails;