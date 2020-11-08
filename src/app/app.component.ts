import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  private subscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(didActivate => {
      this.isActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
