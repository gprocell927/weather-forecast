import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinLocation from './PinLocation'

const RootReducer = combineReducers({
	LocalWeatherReducer,
	PinLocation
});

export default RootReducer;
