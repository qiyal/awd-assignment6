import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  child1Value;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.child1Value = this.getValue();
  }

  getValue() {
    this.logger.log('Child1Component call getValue method.');
    return this.service.getValue();
  }

}
