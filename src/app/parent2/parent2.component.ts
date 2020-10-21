import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  providers: [SharedService]
})
export class Parent2Component implements OnInit {
  parent2Value;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.setNewValue('New Hello');
    this.parent2Value = this.getValue();
  }

  getValue() {
    this.logger.log('Parent2Component call getValue method.');
    return this.service.getValue();
  }

  setNewValue(newValue: string) {
    this.logger.log('Parent2Component call setValue method.');
    this.service.setValue(newValue);
  }

}
