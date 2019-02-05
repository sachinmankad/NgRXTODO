import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { Todo } from './../../models/todo.model'
import { AppState } from './../../app.state'
import * as TodoActions from './../../actions/todo.actions'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public todos: Observable<Todo[]>
  public filterOptions: any[] = ['ALL', 'PENDING', 'FINISHED'];

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo'); 
  }

  removeTodo(index) {
    this.store.dispatch(new TodoActions.RemoveTodo(index) )
  }

  toggleTodo(todo) {
    this.store.dispatch(new TodoActions.ToggleTodo(todo))
  }

  updateTodo(todo) {
    console.log('Show Todo', todo);
    this.store.dispatch(new TodoActions.UpdateTodo(todo))
  }

  editTodo(index) {
    console.log(index);
    this.store.dispatch(new TodoActions.EditTodo(index))
  }

  ngOnInit() {
  }

}
