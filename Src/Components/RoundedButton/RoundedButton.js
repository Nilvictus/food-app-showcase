import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

type Props = {
    addedStyle: ?void,
    text: ?string,
    textStyle: ?void,
}

const RoundedButton = (props: Props) => {
    return(
        <TouchableOpacity style={[styles.main, props.addedStyle]}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default RoundedButton;