import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';
import styles from './style';
import Icon from '../../Tools/IconGroup';

const SearchBar = () => {
    return(
        <View style={styles.main}>
            <Image source={Icon.search} style={styles.searchIcon}/>
            <TextInput style={styles.textInput} placeholder='Search'/>
        </View>
    )
}

export default SearchBar;