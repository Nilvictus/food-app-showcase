// In App.js in a new project

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './style';
import FoodSquareContainer from '../../Components/FoodSquareContainer/FoodSquareContainer';
import RoundedButton from '../../Components/RoundedButton/RoundedButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import BottomTabNavigation from '../../Components/BottomTabNavigation/BottomTabNavigation';
import FoodList from '../../Components/FoodList/FoodList';
import Icon from '../../Tools/IconGroup';
import TopBar from '../../Components/TopBar/TopBar';
import Photos from '../../Tools/ImageGroup';
import PopularFood from '../../Components/PopularFood/PopularFood';
import FoodDetails from '../../Components/FoodDetails/FoodDetails';
import FoodQuantity from '../../Components/FoodQuantity/FoodQuantity';
import AddToBasketScreen from '../AddToBasketScreen/AddToBasketScreen';
import {Provider} from 'react-redux';
import configureStore from '../../Services/Redux/Store/ConfigureStore';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFoodData,
  setTotalPriceRedux,
} from '../../Services/Redux/Actions/Index';

const searchFilter = [
  {
    id: 1,
    name: 'Burger',
  },
  {
    id: 2,
    name: 'Pizza',
  },
  {
    id: 3,
    name: 'Cheeze',
  },
  {
    id: 4,
    name: 'Lasagna',
  },
];

const searchFilter2 = [
  {
    id: 1,
    name: 'MilkTea',
  },
  {
    id: 2,
    name: 'SoftDrink',
  },
  {
    id: 3,
    name: 'Alcohol',
  },
  {
    id: 4,
    name: 'Coffee',
  },
];

const foodData = [
  {
    id: 1,
    name: 'Burger',
    source: Photos.burger,
    price: '28.00',
  },
  {
    id: 2,
    name: 'Pizza',
    source: Photos.pizza,
    price: '38.00',
  },
  {
    id: 3,
    name: 'Lasagna',
    source: Photos.lasagna,
    price: '18.00',
  },
  {
    id: 4,
    name: 'Burger',
    source: Photos.burger,
    price: '23.00',
  },
  {
    id: 5,
    name: 'Pizza',
    source: Photos.pizza,
    price: '67.00',
  },
  {
    id: 6,
    name: 'Lasagna',
    source: Photos.lasagna,
    price: '13.00',
  },
  {
    id: 7,
    name: 'Pizza',
    source: Photos.pizza,
    price: '43.00',
  },
  {
    id: 8,
    name: 'Lasagna',
    source: Photos.lasagna,
    price: '46.00',
  },
  {
    id: 9,
    name: 'Burger',
    source: Photos.burger,
    price: '29.00',
  },
];

function SearchScreen() {
  return (
    <View style={styles.main}>
      <TopBar homeStyle={styles.topBarComponent} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewContainer}>
          <SearchBar homeStyle={styles.searchBarComponent} />
          <View style={styles.searchFilterContainerMain}>
            {renderSearchFilter()}
          </View>
          <View style={styles.searchFilterContainerMain}>
            {renderSearchFilter2()}
          </View>
          <Text style={styles.favoriteFoodText}>Choose your favorite food</Text>
          <View style={styles.flatListContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
              data={foodData}
              renderItem={({item}) => (
                <FoodSquareContainer
                  homeStyle={styles.foodSquareContainerComponent}
                  foodDetails={item}
                />
              )}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <HomeStack.Screen
        name="AddToBasketScreen"
        component={AddToBasketScreen}
      />
    </HomeStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  var myloop = [];
  for (let i = 0; i < 5; i++) {
    myloop.push(<Image source={Icon.rateStar} style={styles.rateStar} />);
  }

  const openAddBasketScreen = item => {
    navigation.navigate('AddToBasketScreen', {
      detailsOfFood: item,
    });
  };

  return (
    <View style={styles.main}>
      <TopBar homeStyle={styles.topBarComponent} />

      <ScrollView style={styles.insideScrollContainer}>
        <View style={styles.scrollViewContainer2}>
          <SearchBar homeStyle={styles.searchBarComponent} />
          <Text style={styles.foodText}>Food</Text>
          <View style={styles.foodFlatListContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={styles.foodFlatList}
              horizontal={true}
              data={foodData}
              renderItem={({item}) => (
                <FoodSquareContainer
                  homeStyle={styles.foodSquareContainerComponentHomeScreen}
                  foodDetails={item}
                  onPress={() => openAddBasketScreen(item)}
                />
              )}
            />
          </View>
          <View style={styles.popularFoodContainer}>
            <Text style={styles.popularFoodText}>Popular Food</Text>
            <TouchableOpacity style={styles.viewMoreButton}>
              <Text style={styles.viewMoreText}>View More</Text>
              <Image source={Icon.chevron} style={styles.chevronIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.popularFlatListContainer}>
            <FlatList
              style={styles.flatListPopularFoods}
              data={foodData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <PopularFood
                  item={item}
                  style={styles.popularFoodstyle}
                  onPress={() => openAddBasketScreen(item)}
                />
              )}
            />
          </View>
          <Text style={styles.foodText}>Pay Day Offer</Text>
          <View style={styles.foodOffer}>
            <View style={styles.foodOfferContainer}>
              <Image source={Photos.ramen} style={styles.foodOfferImage} />
              <Image source={Photos.ramen} style={styles.foodOfferImage} />
              <View style={styles.offerTextContainer}>
                <Text style={styles.offerText}>
                  Free salads{'\n'}for every couple!
                </Text>
                <View style={styles.starLoopContainer}>{myloop}</View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function MyBasket() {
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  const foodTotalPriceRedux = useSelector(state => state.foodReducer.foodTotalPrice);
  const foodDataRedux = useSelector(state => state.foodReducer.foodData);

  useEffect(() => {
    calculateTotal();
  }, []);

  const calculateTotal = x => {
    let total = 0;
    foodDataRedux.map(item => {
      total = total + parseInt(item.price);
    });

    // setTotalPrice(total);
    dispatch(setTotalPriceRedux(total));
  };

  const addCalculate = x => {
    alert('yow');
    let total = totalPrice + x;
    dispatch(setTotalPriceRedux(total));
  };

  return (
    <View style={styles.main}>
      <TopBar homeStyle={styles.topBarComponent} />
      <Text style={styles.myBasketText}>My Basket</Text>
      <View style={styles.foodListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatList2}
          data={foodDataRedux}
          renderItem={({item}) => (
            <FoodList
              homeStyle={styles.foodSquareContainerComponent}
              foodDetails={item}
              calculate={() => addCalculate(item.price)}
            />
          )}
        />
      </View>
      <View style={styles.bottomTotalContainer}>
        <View style={styles.timeDeliveryContainer}>
          <Image source={Icon.alarm} style={styles.alarmIcon} />
          <Text style={styles.deliveryText}>Time of delivery</Text>
          <Text style={styles.minutesText}>20-25 minutes</Text>
        </View>
        <RoundedButton
          style={styles.buttonTotal}
          text={'Total $' + foodTotalPriceRedux}
        />
      </View>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.main}>
      <AddToBasketScreen />
    </View>
  );
}

const renderSearchFilter = () => {
  return searchFilter.map(item => {
    return (
      <TouchableOpacity style={styles.searchFilterContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  });
};

const renderSearchFilter2 = () => {
  return searchFilter2.map(item => {
    return (
      <TouchableOpacity style={styles.searchFilterContainer2}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  });
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? Icon.house : Icon.house;
                return (
                  <Image
                    source={iconName}
                    style={focused ? styles.homeFocused : styles.homeNotFocused}
                  />
                );
              } else if (route.name === 'Search') {
                iconName = focused ? Icon.search : Icon.search;
                return (
                  <Image
                    source={iconName}
                    style={
                      focused ? styles.searchFocused : styles.searchNotFocused
                    }
                  />
                );
              } else if (route.name === 'MyBasket') {
                iconName = focused ? Icon.basket : Icon.basket;
                return (
                  <Image
                    source={iconName}
                    style={
                      focused ? styles.basketFocused : styles.basketNotFocused
                    }
                  />
                );
              } else {
                iconName = focused ? Icon.profile : Icon.profile;
                return (
                  <Image
                    source={iconName}
                    style={
                      focused ? styles.profileFocused : styles.profileNotFocused
                    }
                  />
                );
              }
            },
          })}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{headerShown: false, tabBarShowLabel: false}}></Tab.Screen>
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{headerShown: false, tabBarShowLabel: false}}
          />
          <Tab.Screen
            name="MyBasket"
            component={MyBasket}
            options={{headerShown: false, tabBarShowLabel: false}}
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false, tabBarShowLabel: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
