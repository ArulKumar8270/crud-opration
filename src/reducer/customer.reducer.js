import { customerConstant } from "../action/constants";

const initState = {
    customers : {},
    loading: false
}

const createCustomer = (state = initState, action) => {
    switch(action.type){
        case customerConstant.CREATE_CUSTOMER_REQUEST:
            return state ={
                ...state,
                loading: true
            }
        case customerConstant.CREATE_CUSTOMER_SUCCESS:
            return state = {
                ...state,
                loading: false
            }
        case customerConstant.CREATE_CUSTOMER_FAILURE:
            return state = {
                ...state,
                loading: false
            }
        case customerConstant.GET_CUSTOMER_REQUEST:
            return state = {
                ...state,
                loading: true
            }
        case customerConstant.GET_CUSTOMER_SUCCESS: 
            return state = {
                ...state,
                customers: action.payload,
                loading: false
            }
        case customerConstant.GET_CUSTOMER_FAILURE:
            return state ={
                ...state,
                loading: false,
            }
        case customerConstant.UPDATE_CUSTOMER_REQUEST:
            return state ={
                ...state,
                loading: true,
            }
        case customerConstant.UPDATE_CUSTOMER_SUCCESS:
            return state ={
                ...state,
                loading: false,
            }
        case customerConstant.UPDATE_CUSTOMER_FAILURE:
            return state ={
                ...state,
                loading: false,
            }
        case customerConstant.DELETE_CUSTOMER_REQUEST:
            return state ={
                ...state,
                loading: true,
            }
        case customerConstant.DELETE_CUSTOMER_SUCCESS:
            return state ={
                ...state,
                loading: false,
            }
        case customerConstant.DELETE_CUSTOMER_FAILURE:
            return state ={
                ...state,
                loading: false,
            }
        default: return state 
    }
}

export default createCustomer;