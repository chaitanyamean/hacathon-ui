import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private httpClient: HttpClient) { }
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  private loginUrl = 'https://blooming-escarpment-58887.herokuapp.com/user/login';
  private signup = ' https://blooming-escarpment-58887.herokuapp.com/user/signup';

  public login(loginDetails) {
    const response = this.httpClient.post(`${this.loginUrl}`, loginDetails);
    let loginStatus = response;
    loginStatus.toPromise().then(data => {
      let dataStatus: any = data;
      console.log(dataStatus);
      if (dataStatus.status === 200) {
        this.getLoggedInName.emit(dataStatus.result.name);
        return true;
      } else {
        this.getLoggedInName.emit('Login');
        return false;
    }
    });
    return response;
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.getLoggedInName.emit('Login');
  }

  public userSignUp(user) {
    return this.httpClient.post(this.signup, user);
  }

}
