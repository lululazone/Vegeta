import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppModule} from "../app.module";
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  apiURL = 'http://172.20.10.6:3000/users';
  email: string = "";
  username: string = "";
  password: string = "";
  constructor(private http: HttpClient) {

  }

  // @ts-ignore
  postRegister() {
    // @ts-ignore
    if(document.getElementById("password").value != document.getElementById("passwordretype").value){
      alert("Passwords do not match");
      return;
    }
    else{
      // @ts-ignore
      this.email = document.getElementById("email").value;
      // @ts-ignore
      this.username = document.getElementById("name").value;
      // @ts-ignore
      this.password = document.getElementById("password").value;
      return this.http.post(this.apiURL, {
        username: this.username,
        email: this.email,
        password: this.password
      }).subscribe((data: any) => {
        console.log(data);
        alert("User registered");

      })
      }
    }
}
