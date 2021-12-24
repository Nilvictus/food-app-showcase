import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';
import RoundedButton from '../RoundedButton/RoundedButton';

type Props = {
    addedStyle: ?void,
}

const PopularFood = (props: Props) => {
    return(
        <View style={[styles.main, props.addedStyle]}>
            <Image source={Photos.pizza} style={styles.image} />
            <Text style={styles.foodText}>Italian Piada</Text>
            <Image source={Icon.rateStar} style={styles.rateStar}/>
            <RoundedButton text={'See more  >'} addedStyle={styles.addedStyle} textStyle={styles.textStyle}/>
        </View>
    )
}

export default PopularFood;