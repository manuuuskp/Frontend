// action dispatcher is the one which triggers the action which then triggers the reducer function.
// The reducer function then update the state in the store.

// Inorder to dispatch an action we need dispacther and an action type.

import { useDispatch } from "react-redux";
import { reducerAction } from "./reducer";

const anyApp = () => {
  const dispatch = useDispatch();
  onBtnClick = () => {
    dispatch(reducerAction.addCount()); // this will trigger the function in the reducer.
  };
};

// how do we use the state that is in the store ?

import { useSelector } from "react-redux";

const anyOtherApp = () => {
  const userState = useSelector((state) => state.username);
  // we will get all the state values and we need to use the alias name which we have used in configuring the store.
};
