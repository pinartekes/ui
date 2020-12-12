import * as actionTypes from "./actionTypes";
import axios from "../../libs/userapi";
import jwt_decode from "jwt-decode";

import setJWTToken from "../../libs/SetJWTToken";

export const login=(loginCred)=>async dispatch=>{

    try{
      const response = await axios.post(`/auth/login`,loginCred);
     
     // console.log( response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setJWTToken(response.data.token);
      const decoded = jwt_decode(response.data.token);
      console.log(decoded);
      dispatch({type:actionTypes.SET_CURRENT_USER,payload:decoded});
    }
    catch
    {
      dispatch({type:actionTypes.GET_ERRORS,payload: 'Invalid Login Credantials' });
    }
  }

  export const register=(registerUser)=>async dispatch=>{

    try{
      await axios.post(`/auth/register`,registerUser);
    //  history.push("/signin");
      dispatch({type:actionTypes.GET_ERRORS,payload:{}});
    }
    catch
    {
      dispatch({type:actionTypes.GET_ERRORS,payload: 'Invalid User Info' });
    }
  }
  export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setJWTToken(false);
    return {
      type: actionTypes.SET_CURRENT_USER,
      payload: ''
    };
  };