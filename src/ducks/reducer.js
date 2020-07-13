const initialState ={
    username:'',
    profile: '',
    userId:''
}

const GET_USER = 'GET_USER';
const GET_PROFILE_PICTURE = 'GET_PROFILE_PICTURE';
const GET_ID = 'GET'

export function getUser(userObj){
    return {
        type: GET_USER,
        payload: userObj
    }
}

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return{...state, user: payload}
            
        default: return state

    }

}

