import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ang-routing';

  constructor(private router: Router) {}

  ngOnInit() {
    // const obsTest$ = new Observable((observer) => {
    //   observer.next('Returned from Observable');
    // }).subscribe((value) => {
    //   console.log(value);
    // });
    // const obsTest = function () {
    //   console.log('printed from function');
    // };
    // obsTest();
  }

  observable = new Observable((observer) => {
    observer.next('hahaha');
  }).subscribe({
    next: (x) => console.log('Observer got a next value: ' + x),
    error: (err) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  });

  
  obs2 = new Observable((observer) => {
    let x = 5;
    observer.next(x);
    x += 10;
    setTimeout(() => {
      observer.next(x);
      observer.complete();
    }, 1000);
  }).subscribe({
    next: (value: any) => console.log(value),
    complete: () => console.log('done'),
  });

  // observer = {
  //   next: (value: any) => console.log(value),
  //   complete: () => console.log('done'),
  // };

}
