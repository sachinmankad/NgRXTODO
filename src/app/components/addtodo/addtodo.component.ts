import { Component, OnInit } from '@angular/core'
import { TodoService } from './../../services/todo.service'
import { Observable } from 'rxjs';
import { Todo } from './../../models/todo.model'
import { Store } from '@ngrx/store'
import { AppState } from './../../app.state'
import * as TodoActions from './../../actions/todo.actions'


@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss'],
  providers: [ TodoService ]
})
export class AddtodoComponent implements OnInit {

  public todo : Todo;
  public showError: boolean = false;

  constructor(
    private store: Store<AppState>, 
    private _todoService: TodoService) {

    this.todo = {
      id: '',
      description: '',
      finished: false,
      isEdit: false
    }
    
  }

  addTodo() {
    console.log(this.todo, this.todo.description.length, (this.todo.description.length > 0));
    if(this.todo.description.length > 0) {
      let taskItem = {
        id: this._todoService.getId(),
        description: this.todo.description,
        finished: false,
        isEdit: false
      };
      this.store.dispatch(new TodoActions.AddTodo(taskItem))
      this.todo = {
        id: '',
        description: '',
        finished: false,
        isEdit: false
      }
    } else {
      console.log("Add Some data");
    }
  }

  ngOnInit() {}

}

