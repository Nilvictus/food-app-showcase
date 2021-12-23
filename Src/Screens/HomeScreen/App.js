// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './style';
import FoodSquareContainer from '../../Components/FoodSquareContainer/FoodSquareContainer';
import RoundedButton from '../../Components/RoundedButton/RoundedButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import BottomTabNavigation from '../../Components/BottomTabNavigation/BottomTabNavigation';
import FoodList from '../../Components/FoodList/FoodList';
import Icon from '../../Tools/IconGroup';
import TopBar from '../../Components/TopBar/TopBar';

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
]

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
]

function HomeScreen() {
  return (
    <View style={styles.main}>
      <TopBar homeStyle={styles.topBarComponent} />
      <SearchBar homeStyle={styles.searchBarComponent} />
      <View style={styles.searchFilterContainerMain}>
        {renderSearchFilter()}
      </View>
      <View style={styles.searchFilterContainerMain}>
        {renderSearchFilter2()}
      </View>
      <Text style={styles.favoriteFoodText}>Choose your favorite food</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.main}>
      <FoodSquareContainer />
    </View>
  )
}

function FoodScreen() {
  return (
    <View style={styles.main}>
      <Text>Food Screen</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={styles.main}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const renderSearchFilter = () => {
  return searchFilter.map((item) => {
    return (
      <TouchableOpacity style={styles.searchFilterContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    )
  })
}

const renderSearchFilter2 = () => {
  return searchFilter2.map((item) => {
    return (
      <TouchableOpacity style={styles.searchFilterContainer2}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    )
  })
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? Icon.house
                : Icon.house;
            } else if (route.name === 'Search') {
              iconName = focused
                ? Icon.search
                : Icon.search;
            } else if (route.name === 'FoodScreen') {
              iconName = focused
                ? Icon.basket
                : Icon.basket;
            } else {
              iconName = focused
                ? Icon.profile
                : Icon.profile;
            }

            return <Image source={iconName} style={styles.iconSize} />;
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Tab.Screen name="FoodScreen" component={FoodScreen} options={{ headerShown: false }} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;