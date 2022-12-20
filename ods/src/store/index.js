import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "increment5":
      return {
        counter: state.counter + action.amount,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return initialState;
  }
};

const store = createStore(counterReducer);

export default store;
