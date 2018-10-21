import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getName() {
    this.messageEvent.emit(this.name);
  }

}
