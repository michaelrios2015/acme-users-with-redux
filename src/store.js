import { createStore } from 'redux';


const initialState = {
    users: [],
    loading: true 
}
const store = createStore((state = initialState, action)=> {
    if(action.type === 'LOAD_USERS'){
        state = {...state, users: action.users};
    }
    if(action.type === 'LOADED'){
        state = {...state, loading: false};
    }
    if(action.type === 'CREATE_USER'){
        //console.log(action.user);
        state = {...state, users: [...state.users, action.user]};
    }
    return state;
});

export default store;