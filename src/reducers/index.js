import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {carReducer} from "./carReducer";
import {clientReducer} from "./clientReducer";
import {contractReducer} from "./contractReducer";
import {dealerReducer} from "./dealerReducer";

import {fetchCars} from "../services/carServices";
import {fetchClients} from "../services/clientServices";
import {fetchCarsStatistic} from "../services/carServices";



const rootReducer = combineReducers({
    carsData: carReducer,
    dealersData: dealerReducer,
    clientsData: clientReducer,
    contractsData: contractReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


store.dispatch(fetchCars())
store.dispatch(fetchClients())
store.dispatch(fetchCarsStatistic())