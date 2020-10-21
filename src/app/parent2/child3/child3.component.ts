import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  child3Value;

  constructor(private service: SharedService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.child3Value = this.getValue();
  }

  getValue() {
    this.logger.log('Child3Component call getValue method.');
    return this.service.getValue();
  }

}
