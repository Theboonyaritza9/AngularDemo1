import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-list',
    templateUrl: './login-list.component.html',
    styleUrls: ['./login-list.component.css']
})

export class LoginListComponent implements OnInit {
    constructor(private http: HttpClient,public router: Router) { }
    onSubmitLogin(res) {
        this.http.post<any>('http://localhost:5000/api/login', res).subscribe(res => {
            console.log('Login: ' + res.result);
            if (res.result == true){
                this.router.navigate(['/dashboard']);
            }
            else alert('email or password is wrong');
        })
    }

    ngOnInit(): void {
    }
}