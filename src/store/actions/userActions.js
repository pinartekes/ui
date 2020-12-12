import * as actionTypes from "./actionTypes";
import axios from "../../libs/userapi";


export const changeUser=(user)=>dispatch=>{
    dispatch({type:actionTypes.CHANGE_USER,payload:user});
}

export const fetchUsers=()=>async dispatch=>{
  dispatch({type:actionTypes.FETCH_USERS_REQUESTED});
  try{
    const response = await axios.get('/users/topten');
   // console.log(response.data);
    dispatch({type:actionTypes.FETCH_USERS_SUCCESS,payload:response.data});

  }
  catch
  {
    dispatch({type:actionTypes.FETCH_USERS_FAILED});
  }
}

export const fetchUser=(id)=>async dispatch=>{
  dispatch({type:actionTypes.FETCH_USER_REQUESTED});
  try{
    const response = await axios.get(`/users/${id}`);
    dispatch({type:actionTypes.FETCH_USER_SUCCESS,payload:response.data});
  }
  catch
  {
    dispatch({type:actionTypes.FETCH_USER_FAILED});
  }
}

export const newUser=()=>async dispatch=>
{
  dispatch({type:actionTypes.NEW_USER})
}

export const saveUser=(user)=>async dispatch=>{
  dispatch({type:actionTypes.SAVE_USER_REQUESTED});
  try{
    const response = await axios.post(`/users`,user);
    dispatch({type:actionTypes.SAVE_USER_SUCCESS,payload:response.data});
  }
  catch
  {
    dispatch({type:actionTypes.SAVE_USER_FAILED});
  }
}


export const updateUser=(user)=>async dispatch=>{
  dispatch({type:actionTypes.UPDATE_USER_REQUESTED});
  try{
    await axios.put(`/users/${user.id}`,user);
    dispatch({type:actionTypes.UPDATE_USER_SUCCESS,payload:user});
  }
  catch
  {
    dispatch({type:actionTypes.UPDATE_USER_FAILED});
  }
}

export const deleteUser=(id)=>async dispatch=>{
  dispatch({type:actionTypes.DELETE_USER_REQUESTED});
  try{
    await axios.delete(`/users/${id}`);
    dispatch({type:actionTypes.DELETE_USER_SUCCESS,payload:id});
  }
  catch
  {
    dispatch({type:actionTypes.DELETE_USER_FAILED});
  }
}