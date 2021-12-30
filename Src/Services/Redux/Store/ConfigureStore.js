import {combineReducers, createStore} from 'redux';

import FoodReducer from '../Reducers/FoodReducer';

const rootReducer = combineReducers({
    foodReducer: FoodReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;