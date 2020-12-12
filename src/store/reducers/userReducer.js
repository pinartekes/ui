import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: [],
  user: {},
  currentUser:{},
  loading: false,
  errors: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER:
      return {...state, currentUser: action.payload};
    case actionTypes.FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case actionTypes.FETCH_USERS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_USER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload };
    case actionTypes.FETCH_USER_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_USER:
      return { ...state, user: {} };
    case actionTypes.SAVE_USER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_USER_SUCCESS:
      return {...state,users: [...state.users, action.payload],errors: {},loading: false,currentUser:{}};
    case actionTypes.SAVE_USER_FAILED:
      return {...state,errors: action.payload.data,loading: false};
    case actionTypes.UPDATE_USER_REQUESTED: 
      return {...state,loading: true};
    case actionTypes.UPDATE_USER_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === user.id ? user : item,
         
        ),
        errors: {},
        loading: false,
        currentUser:user
      };
    }
    case actionTypes.UPDATE_USER_FAILED: 
      return {...state,errors: action.payload,loading: false};

    case actionTypes.DELETE_USER_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        users: state.users.filter((item) => item.id !== id)
        ,currentUser:{}
    }
    }
    case actionTypes.DELETE_USER_REQUESTED:
        return {...state,loading:true};
    case actionTypes.DELETE_USER_FAILED: 
        return {...state,errors:action.payload,loading:false};

    default:
      return state;
  }
};

export default userReducer;