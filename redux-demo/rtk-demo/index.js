const store = require("./app/store");
console.log("intital state", store.getState());

const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceAction = require("./features/icecream/iceSlice").iceAction;

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked());
// store.dispatch(iceAction.ordered());

unsubscribe();
