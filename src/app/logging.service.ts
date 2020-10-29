export class LoggingService {
  logStatusChange(status: string): void {
    console.log('A service status changed, new status: ' + status);
  }
}
