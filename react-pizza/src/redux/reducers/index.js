import { combineReducers } from 'redux'
import filtersReducer from "./filters"
import pizzaReducer from "./pizza"



const rootReducer = combineReducers({
   filters: filtersReducer,
   pizzas: pizzaReducer,
});


export default rootReducer