const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// these are the types of the actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// this is known as an action creator
// it generates the action object
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

// if we want to have only one reducer

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

// the pattern for a reducer is
// (oldState, action) => (newState depending on the action)
//  we do not mutate the oldState, we make a copy of it

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1
//     }
//     default: return state
//   }
// }

// else we have multiple reducers
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// when we have multiple reducers,
// by convention they are placed into a rootReducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// the store is where the state lives in the application
// middleware is what we use to get additional functionality
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial State ', store.getState());

// when we use subscribe, the function passed as a param is
// executed every time state in the store changes
// it returns a function unsubscribe which we can use to stop subscribing
const unsubscribe = store.subscribe(() => {});

// if we didn't have a logging middleware, we'd have
// const unsubscribe = store.subscribe(() => console.log(store.getState()););


// dispatch means
// 1. we are providing an action to the store
// 2. the action is passed on to every reducer
// 3. the relevant reducer picks up on the action
// 4. the relevant reducer processes it and updates the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();

// the entire Redux flow is as follows -
// 1. action is generated
// 2. action is dispatched
// 3. reducer catches the action
// 4. reducer updates the state
