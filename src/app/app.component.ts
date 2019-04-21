import { Component } from '@angular/core';
import { LoginSignupService } from './signup-login/login-signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hacathon-ui';
  userName: string;
  isloggedin: boolean = false;

  constructor(public loginService:LoginSignupService) {
    loginService.getLoggedInName.subscribe(name => this.changeName(name));
  }
  private changeName(name: string): void {
    this.userName = name;
    if(this.userName == 'Login'){
       this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
}


}
