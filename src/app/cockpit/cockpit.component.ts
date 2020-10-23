import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput', {static: true}) serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement): void {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

}
