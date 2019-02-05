import { Injectable } from '@angular/core'
import { map, take } from 'rxjs/operators'
import { Todo } from './../models/todo.model'

@Injectable()

export class TodoService {

    constructor(){}

    getId () {
        let S4 = () => {
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

}