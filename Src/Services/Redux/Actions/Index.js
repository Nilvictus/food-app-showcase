import {
    SET_FOOD_DATA,
    SET_TOTAL_PRICE,
    SET_FOOD_PRICE,
} from '../Constants/Index';

export function setFoodData(data: any) {
    return {
        type: SET_FOOD_DATA,
        payload: data,
    };
}

export function setTotalPriceRedux(data: any) {
    return {
        type: SET_TOTAL_PRICE,
        payload: data,
    };
}

export function setFoodPriceRedux(data: any) {
    return {
        type: SET_FOOD_PRICE,
        payload: data,
    };
}