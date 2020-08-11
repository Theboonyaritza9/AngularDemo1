import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  title = 'myApp';
  usersArray:any[] = []

  constructor(private http: HttpClient) {

  }

  getUsers(){
    this.http.get<any>('http://localhost:5000/api/users').subscribe(res => {
      this.usersArray = res;
      // alert(JSON.stringify(res));
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
