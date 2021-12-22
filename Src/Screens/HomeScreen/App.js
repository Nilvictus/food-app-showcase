// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './style';
import FoodSquareContainer from '../../Components/FoodSquareContainer/FoodSquareContainer';
import RoundedButton from '../../Components/RoundedButton/RoundedButton';
import SearchBar from '../../Components/SearchBar/SearchBar';
import BottomTabNavigation from '../../Components/BottomTabNavigation/BottomTabNavigation';
import FoodList from '../../Components/FoodList/FoodList';

function HomeScreen() {
  return (
    <View style={styles.main}>
      <FoodList />
    </View>
  );
}

function BasketScreen() {
  return (
    <View style={styles.main}>
      <FoodSquareContainer />
    </View>
  )
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="BasketScreen" component={BasketScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;