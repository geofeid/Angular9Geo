import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


 import { of as observableOf} from 'rxjs';
 import { delay } from 'rxjs/operators';



@Injectable()
export class DishService {
  constructor(private http: HttpClient) { }
  getDishes(): Observable<Dish[]> {
  return this.http.get<Dish[]>(baseURL + 'dishes');
  }
  getDish(id: number): Observable<Dish> {
  return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

 

}