const initialState ={
    username:'',
    profile:'',
    userId:''
}

const GET_USER_INFO = 'GET_USER';


export function getUser(userObj){
    return {
        type: GET_USER_INFO,
        payload: userObj
    }
}

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER_INFO:
            return{...state, user: payload}
            
        default: return state

    }

}

