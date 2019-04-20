import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginSignupService } from '../login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;
  public returnUrl: string;
  public loginDetails = {
    email: '',
    password: ''
  };
  public password: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginSignupService: LoginSignupService) { }

  ngOnInit() {
    // reset login status
    this.loginSignupService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login() {
    this.loading = true;
    this.loginSignupService.login(this.loginDetails).subscribe(
        data => {
          let resObj: any = data
        //  login successful if there's a jwt token in the response
        if (resObj && resObj.token) {
          window.alert("login successfull");
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(resObj));
        }
       
          this.router.navigate([this.returnUrl]);
          return data;
        },
        error => {
          window.alert(error);
          this.loading = false;
        });
  }

}
