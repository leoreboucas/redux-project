import { combineReducers, legacy_createStore as createStore } from 'redux'
import nomesReducer from './reducers/nomesReducer';
import numerosReducer from './reducers/numerosReducer';

const reducers = combineReducers({
    numeros: numerosReducer,
    nomes: nomesReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;