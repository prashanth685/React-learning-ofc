const redux = require("redux");

const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";

const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockeCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// (previousState,action)=>newState
const initalState = {
  numOfCakes: 10,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("intial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch({
  type: CAKE_ORDERED,
  payload: 4,
});
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockeCake(3));

unsubscribe();
