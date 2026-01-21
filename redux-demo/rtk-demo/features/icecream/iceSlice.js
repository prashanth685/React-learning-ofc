const reducer = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  nooficecream: 12,
};

const iceSlice = createSlice({
  name: "icecream",
  initialState,
  reducer: {
    ordered: (state) => {
      state.nooficecream--;
    },
    restocked: (state, action) => {
      state.nooficecream += action.payload;
    },
  },
});

module.exports = iceSlice.reducer;
module.exports.iceAction = iceSlice.action;
