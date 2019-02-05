import { Action } from '@ngrx/store'
import { Todo } from './../models/todo.model'
import * as TodoActions from './../actions/todo.actions'


const initialState: Todo = {
    id: '0',
    description: 'Sample Todo',
    finished: false,
    isEdit: false
}

export function reducer(state: Todo[] = [initialState], action: TodoActions.Actions) {
    switch(action.type) {
        case TodoActions.ADD_TODO:
            return [...state, action.payload];

        case TodoActions.REMOVE_TODO:
            state.splice(action.payload, 1)
            return state;

        case TodoActions.TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return Object.assign({}, todo, {
                        finished : !todo.finished
                    });
                }
                return todo;
            });

        case TodoActions.UPDATE_TODO:
            console.log(action.payload, state);
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return Object.assign ({}, todo, {
                        description: action.payload.description,
                        isEdit: false
                    });
                }
                return todo;
            });

        case TodoActions.EDIT_TODO:
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return Object.assign ({}, todo, {
                        isEdit: true
                    });
                }
                return todo;
            });

        default:
            return state;    
    }
}