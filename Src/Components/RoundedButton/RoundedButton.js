import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

type Props = {
    style: ?void,
    text: ?string,
    textStyle: ?void,
}

const RoundedButton = (props: Props) => {
    return(
        <TouchableOpacity style={[styles.main, props.style]}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default RoundedButton;