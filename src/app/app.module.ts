import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/todo.reducer';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddtodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todo: reducer
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
