export class LoggerService {
  logs: string[] = [];

  constructor() { }

  public log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  public getLogMessage(): string[] {
    this.log('Getting logs messages.');
    return this.logs;
  }
}
