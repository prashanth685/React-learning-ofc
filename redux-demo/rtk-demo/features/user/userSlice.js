const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("");

const initalState = {
  loading: false,
  users: [],
  error: "",
};

const userSlice = {
  name: "user",
};
