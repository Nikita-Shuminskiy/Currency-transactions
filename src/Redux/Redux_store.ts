import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from '../Utils/LocalStorageGeneral';

import { CounterReducer } from './Counter_Reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: CounterReducer,
})
// непосредственно создаём store
export const redux_store = createStore(rootReducer,  loadState(), applyMiddleware(thunk));
redux_store.subscribe(() => {
    saveState({
        counter: redux_store.getState().counter,
    });
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof redux_store


