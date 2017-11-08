import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('').subscribe(
      data =>
      {
        console.log(data);
      }
    );
    this.http.get<UserResponse>('https://api.github.com/users/sarveshhome').subscribe(
      data => {
        console.log("User Login: " + data.login);
        console.log("Bio: " + data.bio);
        console.log("Company: " + data.company);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
}
interface UserResponse {
  login: string;
  bio: string;
  company: string;
}





