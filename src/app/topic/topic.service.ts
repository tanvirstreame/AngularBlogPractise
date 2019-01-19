import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITopic} from './topic';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private url:string='/assets/Data/data.json';

  constructor(private http:HttpClient) { }
  getTopic():Observable<ITopic[]>{
    return this.http.get<ITopic[]>(this.url);
  }
}
