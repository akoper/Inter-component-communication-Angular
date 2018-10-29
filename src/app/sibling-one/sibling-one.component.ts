import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataService} from '../data.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnDestroy {

  name: any;
  subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getData().subscribe(
        name => { this.name = name; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
