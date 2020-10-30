export class LoggingService {
  logStatusChange(status: string): void {
    console.log('An account status changed, new status: ' + status);
  }
}
