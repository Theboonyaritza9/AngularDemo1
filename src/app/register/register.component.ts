import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(res) {
    // let data = { firstName: res.firstName, lastName: res.lastName, email: res.email, password: res.password }
    this.http.post<any>('http://localhost:5000/api', res).subscribe(res => {
      if(res.result == true){
        this.router.navigate(['/']);
      }
      else alert('Something is wrong');
      // console.log(res)
    })
  };

}
