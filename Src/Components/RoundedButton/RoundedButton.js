import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

type Props = {
    addedStyle: ?void,
}

const RoundedButton = (props: Props) => {
    return(
        <TouchableOpacity style={[styles.main, props.addedStyle]}>
            <Text style={styles.text}>Total</Text>
        </TouchableOpacity>
    )
}

export default RoundedButton;