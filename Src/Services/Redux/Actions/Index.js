import {
    SET_FOOD_DATA,
    SET_TOTAL_PRICE,
} from '../Constants/Index';

export function setFoodData(data: any) {
    return {
        type: SET_FOOD_DATA,
        payload: data,
    };
}

export function setTotalPrice(data: any) {
    return {
        type: SET_TOTAL_PRICE,
        payload: data,
    };
}