import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 public loading: boolean = false;
 public signUpDetails = {
   email: '',
   password: '',
   isUser: false,
   name: '',
   mobileNumber: ''
 }
 public firstName: string = '';
 public lastName: string = '';
 public confirmPassword = '';
  
  constructor(private loginSignUpService: LoginSignupService,
    private router: Router) { }

  ngOnInit() {
  }

  public signUp(): void {
    this.loading = true;
    this.signUpDetails.name = this.firstName + ' ' + this.lastName;
    if(this.validatePassword()){
    this.loginSignUpService.userSignUp(this.signUpDetails)
        .subscribe(
            data => {
                window.alert('Registration successful');
                this.router.navigate(['/login']);
            },
            error => {
                window.alert(error);
                this.loading = false;
            });
          }else{
            window.alert("passwords and confirm passwords should match");
          }
}

private validatePassword(): boolean{
     if(this.signUpDetails.password === this.confirmPassword){
         return true;
     }else{
       return false;
     }
}

}
