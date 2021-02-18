import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {getAuth} from "./auth-reducer";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState = {
    initialized: false,
    globalError:null //this state is not realize

};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true

            }

        default:
            return state;

        }
    }

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = (data) => (dispatch) =>{
   let promise = dispatch(getAuth());
Promise.all([promise])
    .then(()=>{
    dispatch(initializedSuccess());
})

}



export default appReducer;