import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count === 2)
          observer.complete();
        if (count > 3)
          observer.error(new Error('Count is greater than 3'));
      }, 800);
    });

    this.firstObsSubscription = customObservable.pipe(map((data: number) => {
      return 'Round ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () => {
      console.log('Done!');
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
