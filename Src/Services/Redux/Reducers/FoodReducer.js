import {SET_FOOD_DATA, SET_TOTAL_PRICE, SET_FOOD_PRICE} from '../Constants/Index';
import Photos from '../../../Tools/ImageGroup';

export type FoodReducerState = {
  foodData: ?(any[]),
  foodTotalPrice: ?any,
  foodPrice: ?any,
};

const initialState: FoodReducerState = {
  // foodData: [
  //   {
  //     id: 1,
  //     name: 'Burger',
  //     source: Photos.burger,
  //     price: '28.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: 'Pizza',
  //     source: Photos.pizza,
  //     price: '38.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     name: 'Lasagna',
  //     source: Photos.lasagna,
  //     price: '18.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     name: 'Burger',
  //     source: Photos.burger,
  //     price: '23.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 5,
  //     name: 'Pizza',
  //     source: Photos.pizza,
  //     price: '67.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 6,
  //     name: 'Lasagna',
  //     source: Photos.lasagna,
  //     price: '13.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 7,
  //     name: 'Pizza',
  //     source: Photos.pizza,
  //     price: '43.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 8,
  //     name: 'Lasagna',
  //     source: Photos.lasagna,
  //     price: '46.00',
  //     quantity: 1,
  //   },
  //   {
  //     id: 9,
  //     name: 'Burger',
  //     source: Photos.burger,
  //     price: '29.00',
  //     quantity: 1,
  //   },
  // ],
  foodData: [],
  foodTotalPrice: null,
  foodPrice: null,
};

const FoodReducer = (state: FoodReducerState = initialState, action: any) => {
  switch (action.type) {
    case SET_FOOD_DATA:
      console.log('see action', action.payload);
      return {
        ...state,
        foodData: action.payload,
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        foodTotalPrice: action.payload,
      };
      case SET_FOOD_PRICE:
        return {
          ...state,
          foodPrice: action.payload,
        };
    default:
      return state;
  }
};

export default FoodReducer;
