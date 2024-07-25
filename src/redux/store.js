import { createStore } from 'redux';
import counterReducer from "../redux/Reducer"

const store = createStore(counterReducer);

export default store;