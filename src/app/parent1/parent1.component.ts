import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component  {

  name1: string;

    getName(name: string): void {
        this.name1 = name;
    }
}
