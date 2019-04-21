import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'https://blooming-escarpment-58887.herokuapp.com';
  private getAllTagsApi = 'https://blooming-escarpment-58887.herokuapp.com/common/getAllTags';
  private setUserDetailsApi = 'https://blooming-escarpment-58887.herokuapp.com/employee/emp-details';
  private getQuestionsApi = "https://blooming-escarpment-58887.herokuapp.com/common/get-questions/";
  private setUserScoreApi = "https://blooming-escarpment-58887.herokuapp.com/common/save-score";
  httpHeaders = new HttpHeaders();
  httpOptions: any;
  authToken: string;
  constructor(private httpClient: HttpClient) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.authToken = currentUser ? currentUser.token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZlbmthdGVzaGNoZXR0eTI5NUBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Y2JiMzZkM2JkOTcyMTAwMTdkOWY2MmYiLCJpYXQiOjE1NTU3NzgzMjV9.Y074Xz11NFN8UrImxUy_3kzNgZJiwf0nxKNvwEIAvM8'; // your token
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    }
  }

 public getAllTags(){

   const response =
   this.httpClient.get(this.getAllTagsApi, this.httpOptions);

   return response;
 }

 public setUserDetails(userDetails) {
  const response = this.httpClient.post(this.setUserDetailsApi, userDetails, this.httpOptions);

  return response;

  // this.httpClient.post(this.setUserDetailsApi, userDetails, this.httpOptions);
 }

 public getEmpDetails(userId) {
  const response = this.httpClient.get(this.url + '/employee/get-emp-details/' + userId, this.httpOptions);

  return response;
 }
//  employee/update-emp-details


 public updateEmpDetails(userDetails) {
  const response = this.httpClient.put(this.url + '/employee/update-emp-details', userDetails, this.httpOptions);

  return response;
 }

 public getQuestions(userId){
   let response =
   this.httpClient.get(this.getQuestionsApi + userId, this.httpOptions);
   return response;
 }

 public setUserScore(userScore){
  let response =
  this.httpClient.post(this.setUserScoreApi, userScore, this.httpOptions);
  return response;
}


}
