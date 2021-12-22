import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import Icon from '../../Tools/IconGroup';

const FoodQuantity = () => {
    return(
        <View style={styles.quantityContainer}>
        <TouchableOpacity>
            <Image source={Icon.removeItem} style={styles.removeIcon} />
        </TouchableOpacity>
        <Text style={styles.quantityNumber}> 2 </Text>
        <TouchableOpacity>
            <Image source={Icon.addItem} style={styles.addIcon} />
        </TouchableOpacity>
    </View>
    )
}

export default FoodQuantity;