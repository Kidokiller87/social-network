const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        /*{
            id: 1,
            photoUrl: 'https://i.pinimg.com/474x/db/65/48/db654830b510091b321a4d4d0160ee9e.jpg',
            followed: false,
            fullName: 'Vladimir',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://i.pinimg.com/474x/06/84/e3/0684e340839cc8b22d3d3a481ed162ea.jpg',
            followed: true,
            fullName: 'Dmitry',
            status: 'Hello React',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://as1.ftcdn.net/jpg/01/92/48/10/500_F_192481078_9pweL73rF0X5RFhPk5NFtpwmXvM0DpDC.jpg',
            followed: false,
            fullName: 'Lusi',
            status: 'Super',
            location: {city: 'New York', country: 'USA'}
        }*/
]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:{
            return {...state,
                users: state.users.map( u=> {
                    if (u.id === action.userId) {
                        return {...u, followed:true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
            }
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;