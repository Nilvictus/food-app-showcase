import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';
import styles from './style';
import Icon from '../../Tools/IconGroup';

type Props = {
    homeStyle: ?void,
}

const SearchBar = (props: Props) => {
    return(
        <View style={[styles.main, props.homeStyle]}>
            <Image source={Icon.search} style={styles.searchIcon}/>
            <TextInput style={styles.textInput} placeholder='Search'/>
        </View>
    )
}

export default SearchBar;