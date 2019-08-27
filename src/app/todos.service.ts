import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient) { }

    getAll(): Observable<Task[]> {
      return this.http.get<Task[]>
         ('https://jsonplaceholder.typicode.com/todos');
    }
}
