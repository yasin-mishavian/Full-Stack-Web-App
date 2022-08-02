import { AUTH , LOGOUT } from './type';

import * as api from '../../api';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    
    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    alert(error);
    window.location.reload();
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    alert(error);
    window.location.reload();
  }
};

export const logout = () => async (dispatch) => {
  try {    
    dispatch({ type: LOGOUT });

    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};