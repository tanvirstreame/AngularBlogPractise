import { Component, OnInit } from '@angular/core';
import {TopicService } from './topic.service' ;

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  public Topic =[]

  constructor(private _topic:TopicService) { }

  ngOnInit() {
  this._topic.getTopic().subscribe(data=>this.Topic=data);
  }

}
