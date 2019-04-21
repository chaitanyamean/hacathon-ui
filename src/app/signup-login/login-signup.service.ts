import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private httpClient: HttpClient) { }

  private loginUrl = 'https://blooming-escarpment-58887.herokuapp.com/user/login';
private signup = ' https://blooming-escarpment-58887.herokuapp.com/user/signup';

  public login(loginDetails) {
    const response = this.httpClient.post(`${this.loginUrl}`, loginDetails);
    return response;
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public userSignUp(user) {
    return this.httpClient.post(this.signup, user);
}

}
