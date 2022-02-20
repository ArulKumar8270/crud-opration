import axios from '../helpers/axios';
import { customerConstant } from './constants';

export const createCustomer = (customer) => {
    console.log(customer)
    return async dispatch => {
        dispatch({type: customerConstant.CREATE_CUSTOMER_REQUEST});
        const res = await axios.post('admin/createCustomer', customer)
        if(res.status === 201){
            const customer = res.data
            console.log(customer);
            dispatch({
                type: customerConstant.CREATE_CUSTOMER_SUCCESS,
                payload: customer
            }) 
        }else{
            dispatch({
                type: customerConstant.CREATE_CUSTOMER_FAILURE,
                payload: res.data.error
            })
        }
    }
}

export const getCustomer  = () => {
    return async dispatch => {
        dispatch({type: customerConstant.GET_CUSTOMER_REQUEST});
        const res = await axios.get('admin/getCustomer') 
        if(res.status === 200){
            const { customer } = res.data
            dispatch({
                type: customerConstant.GET_CUSTOMER_SUCCESS,
                payload: customer
            })
        }else{
            dispatch({
                type: customerConstant.GET_CUSTOMER_FAILURE,
                payload: res.data.error
            })
        }
    }
}

export const updateCustomer = (customer) => {
    console.log(customer)
    return async dispatch => {
        dispatch({type: customerConstant.UPDATE_CUSTOMER_REQUEST});
        const res = await axios.post(`admin/updateCustomer/${customer.id}`, customer)
        if(res.status === 201){
            const customer = res.data
            console.log(customer);
            dispatch({
                type: customerConstant.UPDATE_CUSTOMER_SUCCESS,
                payload: customer
            }) 
        }else{
            dispatch({
                type: customerConstant.UPDATE_CUSTOMER_FAILURE,
                payload: res.data.error
            })
        }
    }
}

export const deleteCustomer = (customerDetails) => {
    console.log(customerDetails)
    return async dispatch => {
        dispatch({type: customerConstant.DELETE_CUSTOMER_REQUEST});
        const res = await axios.post(`admin/deleteCusomer/${customerDetails._id}`)
        if(res.status === 201){
            const customer = res.data
            dispatch({
                type: customerConstant.DELETE_CUSTOMER_SUCCESS,
                payload: customer
            }) 
        }else{
            dispatch({
                type: customerConstant.DELETE_CUSTOMER_FAILURE,
                payload: res.data.error
            })
        }
    }
}