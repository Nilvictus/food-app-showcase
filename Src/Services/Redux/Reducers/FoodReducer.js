import {SET_FOOD_DATA, SET_TOTAL_PRICE} from '../Constants/Index';

export type FoodReducerState = {
  foodData: ?(any[]),
  foodTotalPrice: ?any,
};

const initialState: FoodReducerState = {
  foodData: null,
  foodTotalPrice: null,
};

const FoodReducer = (state: FoodReducerState = initialState, action: any) => {
  switch (action.type) {
    case SET_FOOD_DATA:
      return {
        ...state,
        foodData: action.payload,
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        foodTotalPrice: action.payload,
      };
    default:
      return state;
  }
};

export default FoodReducer;
