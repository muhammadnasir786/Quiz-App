

import AuthAction from "../actions/authAction";
import QAAction from "../actions/QAAction";
let AuthState = {
    loginShow: true,
    registerShow: false,
    isLogin: false,
    user: {},
    allUsers : {}
}

let AuthReducer = (state = AuthState, action) => {
    switch (action.type) {
        case AuthAction.CREATE_USER_SUCCESSFULLY:
            return { ...state, loginShow: true, registerShow: false };
            break;
        case QAAction.GET_USER_ADD:
            let allUsers = Object.assign({}, state.allUsers);
            allUsers[action.payload.key] = action.payload.userData;
            return { ...state, allUsers }

        case AuthAction.LOGIN_USER_SUCCESSFULLY:

            return (Object.assign({}, { isLogin: true }))
            break;
        case 'REGISTER_SHOW':
            return { ...state, registerShow: true, loginShow: false };
        case 'LOGOUT':
            return { isLogin: false }
        default:
            return state
    }
}
export default AuthReducer;