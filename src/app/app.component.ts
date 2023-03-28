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

  constructor(private router: Router) { }

  ngOnInit() {
    const obsTest$ = new Observable(observer => {
      observer.next('Returned from Observable')
    }).subscribe(value => {
      console.log(value);

    });

    const obsTest = function () {
      console.log('printed from function');

    }
    obsTest();
  }

  onSubmit() {
    this.router.navigate(['/posts']);
  }
}
