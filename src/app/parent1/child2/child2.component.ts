import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  child2Value;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.child2Value = this.getValue();
  }

  getValue() {
    this.logger.log('Child2Component call getValue method.');
    return this.service.getValue();
  }

}
