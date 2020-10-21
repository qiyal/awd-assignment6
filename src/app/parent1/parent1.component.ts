import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {LoggerService} from '../services/logger.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css'],
  providers: [SharedService]
})
export class Parent1Component implements OnInit {
  parent1Value;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.parent1Value = this.getValue();
  }

  getValue() {
    this.logger.log('Parent1Component call getValue method.');
    return this.service.getValue();
  }

}
