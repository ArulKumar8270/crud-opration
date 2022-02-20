import axios from '../helpers/axios';
import { authConstant, userConstant } from './constants';

export const login = (user) =>{
    return async (dispatch) => {
        dispatch({type: authConstant.LOGIN_REQUEST});
        const res = await axios.post('/admin/signIn', {
            ...user
        });

        if(res.status === 200){
            const { token, user } = res.data;
            
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token,user
                }
            })
        }else{
            if(res.status === 400) {
                dispatch({
                    type: authConstant.LOGIN_FAILURE,
                    payload: {
                        error : res.data.error
                    }
                })
            }
        }
    }

}


export const isUserLogedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token,user
                }
            })
        }else{
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: {
                    error : 'Field to login'
                }
            })
        }
    }
}

export const signOut = () => {
        return async dispatch => {
        dispatch({type: authConstant.LOGOUT_REQUEST});
        localStorage.clear();
        dispatch({type: authConstant.LOGOUT_SUCCESS});
  }
}

export const signUp = (user) =>{
    console.log(user)
    return async (dispatch) => {
        dispatch({type: userConstant.REGISTER_REQUEST});
        const res = await axios.post('/admin/signUp', {
            ...user
        });
        console.log(res)
        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: userConstant.REGISTER_SUCCESS,
                payload: {
                    message
                }
            })
        }else{
            if(res.status === 400) {
                dispatch({
                    type: userConstant.REGISTER_FAILURE,
                    payload: {
                        error : res.data.error
                    }
                })
            }
        }
    }

}