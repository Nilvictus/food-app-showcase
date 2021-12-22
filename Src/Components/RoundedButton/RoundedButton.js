import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

const RoundedButton = () => {
    return(
        <TouchableOpacity style={styles.main}>
            <Text style={styles.text}>Total</Text>
        </TouchableOpacity>
    )
}

export default RoundedButton;