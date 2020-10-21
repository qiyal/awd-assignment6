import { Component } from '@angular/core';
import {LoggerService} from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment6';
  logMessages: string[] = [];

  constructor(private logger: LoggerService) {
  }

  getLogMessage() {
    this.logger.log('AppComponent call getLogMessage.');
    this.logMessages = this.logger.getLogMessage();
  }
}
