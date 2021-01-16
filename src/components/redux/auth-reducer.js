import {usersAPI} from "../../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    userId: null,
    email:null,
    login:null,
    isAuth:false

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data,
                isAuth: true
            }

        default:
            return state;

        }
    }

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const getAuth = (data) => {
    return (dispatch) => {
        usersAPI.getAuth(data).then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });

    }
}

export default authReducer;