import { Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private log: LoggingService) {}

  addAccount(name: string, status: string): void {
    this.accounts.push({name, status});
    this.log.logStatusChange(status);
  }

  updateStatus(id: number, status: string): void {
    this.accounts[id].status = status;
    this.log.logStatusChange(status);
  }
}
