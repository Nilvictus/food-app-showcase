import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';

const FoodList = () => {
    return (
        <TouchableOpacity style={styles.mainButton}>
            <Image source={Photos.pizza} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.textPrice}>$28.00</Text>
                <Text style={styles.textDescription}>Tasty Italian Piads</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity>
                    <Image source={Icon.removeItem} style={styles.removeIcon} />
                </TouchableOpacity>
                <Text style={styles.quantityNumber}> 2 </Text>
                <TouchableOpacity>
                    <Image source={Icon.addItem} style={styles.addIcon} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default FoodList;