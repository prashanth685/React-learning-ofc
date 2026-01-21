const configureStore = require("@reduxjs/toolkit").configureStore;

const cakeReducer = require("../features/cake/cakeSlice");
const iceReducer = require("../features/icecream/iceSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceReducer,
  },
});
module.exports = store;
