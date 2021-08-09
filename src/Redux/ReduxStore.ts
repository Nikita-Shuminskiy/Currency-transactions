import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from '../Utils/LocalStorageGeneral';
import { CounterReducer } from './CounterReducer';



const rootReducer = combineReducers({
    counter: CounterReducer,
})
export const reduxStore = createStore(rootReducer,  loadState(), applyMiddleware(thunk));

reduxStore.subscribe(() => {
    saveState({
        counter: reduxStore.getState().counter,
    });
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof reduxStore


