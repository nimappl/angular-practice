import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = 'Test';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
  }

  onUpdateServer(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

}
