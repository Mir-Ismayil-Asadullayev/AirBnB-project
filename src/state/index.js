import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer,composeWithDevTools());


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type:'ADD_CARD',payload:"heee"})
store.dispatch({type:'ADD_CARD',payload:"weee"})
