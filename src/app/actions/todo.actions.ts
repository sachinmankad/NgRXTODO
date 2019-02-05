import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Todo } from './../models/todo.model'

export const ADD_TODO  = '[TODO] Add';
export const REMOVE_TODO = '[TODO] Remove';
export const TOGGLE_TODO = '[TODO] Toggle';
export const UPDATE_TODO = '[TODO] Update';
export const EDIT_TODO = '[TODO] Edit';

export class AddTodo implements Action {
    readonly type = ADD_TODO

    constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO

    constructor(public payload: number) {}
}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TODO

    constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO

    constructor(public payload: Todo) {}
}

export class EditTodo implements Action {
    readonly type = EDIT_TODO

    constructor(public payload: Todo) {}
}

export type Actions = AddTodo | RemoveTodo | ToggleTodo | UpdateTodo | EditTodo