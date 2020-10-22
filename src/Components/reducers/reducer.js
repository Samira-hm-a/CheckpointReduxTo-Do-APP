import { combineReducers } from 'redux';
import { todolistFilters } from '../actions/action';


const totasks = (state =[], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
            case 'TOGGLE_TASK':
                return state.map(totask => 
                    (totask.id === action.id) ? 
                    {...totask, completed: !totask.completed}: 
                    totask
                )   
            default : return state;
    }
}
const todolistFilter = (state=todolistFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case 'SET_TODOLIST_FILTER':
            return action.filter;
        default: return state;    
    }
}


export default combineReducers({
    totasks, 
    todolistFilter
});