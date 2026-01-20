const redux = require("redux");
const createStorestore = redux.createStore;
const applymiddleware = redux.applyMiddleware;
const thunkmiddleware = require("redux-thunk");
const axios = require("axios");

const initalState = {
  loading: false,
  users: [],
  error: "",
};
const fetch_user_requested = "fetch_user_requested";
const fetch_user_suceesed = " fetch_user_suceesed";
const fetch_user_failed = "fetch_user_failed";

const fetchuserrequest = () => {
  return {
    type: fetch_user_requested,
  };
};
const fetchusersuccess = () => {
  return {
    type: fetch_user_suceesed,
    payload: users,
  };
};

const fetchuserfailed = () => {
  return {
    type: fetch_user_failed,
    payload: error,
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case fetch_user_requested:
      return {
        ...state,
        loading: true,
      };
    case fetch_user_suceesed:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case fetch_user_failed:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchuserrequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchusersuccess(users));
      })
      .catch((error) => {
        dispatch(fetchuserfailed(error.message));
        error.message;
      });
  };
};

const store = createStorestore(reducer, applymiddleware());
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
