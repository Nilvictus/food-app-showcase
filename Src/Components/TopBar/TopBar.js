import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from '../../Tools/IconGroup';

const TopBar = () => {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.menuButton}>
                <Image source={Icon.menuIcon} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartButton}>
                <Image source={Icon.cartIcon} style={styles.cartImage} />
            </TouchableOpacity>
        </View>
    )
}

export default TopBar;