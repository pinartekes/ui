import * as actionTypes from "../actions/actionTypes";

const initialState = {
  validToken: false,
  user: {}
  };
  
const booleanActionPayload = payload => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};
  const securityReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_CURRENT_USER:
        return { ...state,  validToken: booleanActionPayload(action.payload),
          user: action.payload };
         
      default:
        return state;
    }
  };
  
  export default securityReducer;
  
/*
  import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}*/