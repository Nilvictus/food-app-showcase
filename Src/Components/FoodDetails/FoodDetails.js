import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';

type Props = {
    foodDetails: ?void,
    foodPrice: ?Number,
}

const FoodDetails = (props: Props) => {
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.textPrice}>${props.foodPrice}</Text>
            <Text style={styles.textDescription}>{props.foodDetails.name}</Text>
            <Image source={Icon.rateStar} style={styles.star}/>
        </View>
    )
}

export default FoodDetails;