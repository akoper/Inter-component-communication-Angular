import { Component } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent {

  constructor(private dataService: DataService) { }

  getName(name: string): void {
    this.dataService.sendData(name);
  }

}
