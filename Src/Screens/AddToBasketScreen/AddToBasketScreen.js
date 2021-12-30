import React, {useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import TopBar from '../../Components/TopBar/TopBar';
import styles from './style';
import Photos from '../../Tools/ImageGroup';
import Icon from '../../Tools/IconGroup';
import FoodQuantity from '../../Components/FoodQuantity/FoodQuantity';
import RoundedButton from '../../Components/RoundedButton/RoundedButton';

const AddToBasketScreen = ({route, navigation}) => {

  const { detailsOfFood } = route.params;
  const [quantity, setQuantity] = useState(1);

  const addItem = () => {
    let x = quantity + 1;
    setQuantity(x);
  };

  const removeItem = () => {
    let x = quantity - 1;
    if (x < 1) {
      setQuantity(1);
    } else {
      setQuantity(x);
    }
  };

  var myloop = [];
  for (let i = 0; i < 5; i++) {
    myloop.push(<Image source={Icon.rateStar} style={styles.rateStar} />);
  }

  return (
    <View style={styles.main}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        <Image source={detailsOfFood.source} style={styles.pizzaPhoto} />
        <View style={styles.foodDetails}>
          <Text style={styles.foodText}>{detailsOfFood.name}</Text>
          <View style={styles.loopStarContainer}>{myloop}</View>
          <View style={styles.foodPriceContainer}>
            <Text style={styles.priceText}>${parseFloat(detailsOfFood.price) * parseFloat(quantity)}</Text>
            <FoodQuantity quantity={quantity} onPressRemoveItem={removeItem} onPressAddItem={addItem}/>
          </View>
          <Text style={styles.aboutText}>About the food</Text>
          <Text style={styles.foodDescription}>
            Italian-style street warp with pancetta (bacon), romaine, bruschetta
            tomatoes, creamy parmesan
          </Text>
          <RoundedButton style={styles.roundedButton} text={"Add to Basket"}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddToBasketScreen;
