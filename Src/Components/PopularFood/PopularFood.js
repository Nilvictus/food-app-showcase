import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';
import RoundedButton from '../RoundedButton/RoundedButton';

type Props = {
  style: ?void,
  onPress: () => ?void,
  item: ?any,
};

const PopularFood = (props: Props) => {
  return (
    <View style={[styles.main, props.style]}>
      <Image source={props.item.source} style={styles.image} />
      <Text style={styles.foodText}>{props.item.name}</Text>
      <Image source={Icon.rateStar} style={styles.rateStar} />
      <RoundedButton
        text={'See more  >'}
        style={styles.style}
        textStyle={styles.textStyle}
        onPress={props.onPress}
      />
    </View>
  );
};

export default PopularFood;
