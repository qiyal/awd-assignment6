import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class SharedService {
  value = 'Hello';

  constructor(private loggerService: LoggerService) { }

  public getValue() {
    this.loggerService.log(`Getting value(value=${this.value}).`);
    return this.value;
  }

  public setValue(newValue: string) {
    this.value = newValue;
    this.loggerService.log(`Setting new value(value=${this.value}).`);
  }
}
