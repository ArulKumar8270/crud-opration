import { authConstant } from "../action/constants";

const initState = {
    token: null,
    user : {
        firstName: '',
        LastName: '',
        email: '',
        password: '',
    },
    authenticate: false,
    authenticating: false,
    loading:false,
    error:null,
    message: ''
};
const authReducer =  (state = initState, action) => {
    switch(action.type){

        case authConstant.LOGIN_REQUEST: 
        state = {
            ...state,
            authenticating: true
        }
        break;
        case authConstant.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstant.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstant.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstant.LOGIN_LOUT:
            state = {
                ...state,
                error: action.payload.error,
                loading:false
            }
            break;
            case authConstant.REGISTER_REQUEST:
                state = {
                    ...state,
                    loading: true
                }
                break;
            case authConstant.REGISTER_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    message : action.payload.message
                }
                break;
            case authConstant.REGISTER_FAILURE:
                state = {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
            break;
        default : return state
    }
    return state;

}

export default authReducer;