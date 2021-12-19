import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test1';

public Listando$!: Observable<any>;

  constructor(private http: HttpClient) { 
  
    }

  ngOnInit(){
   /* this.http.get('https://ico-fullstack-test.herokuapp.com/v1/histograma')
    .subscribe(d=> console.log(d));*/
    this.Listando$ = this.http.get('https://ico-fullstack-test.herokuapp.com/v1/histograma');
  }
}
