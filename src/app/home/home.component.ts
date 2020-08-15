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
  usersArray: any[] = []

  constructor(private http: HttpClient) {

  }

 
  // Request All users from Backend
  getUsers() {
    this.http.get<any>('http://localhost:5000/api/users').subscribe(res => {
      // Get All data then send to front-end
      this.usersArray = res;
    })
  }

  deleteUser(id) {
    const data = { email: id }
    this.http.post<any>('http://localhost:5000/api/delete', data).subscribe(res => {
      alert(JSON.stringify(res));
      this.getUsers();

    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
