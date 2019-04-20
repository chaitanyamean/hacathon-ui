import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}


    // url = 'https://blooming-escarpment-58887.herokuapp.com/common/getAllUsers';

    // login(user) {
    //   const response = this.http.post(`${this.url}/user/login`, user);
    //   return response;
    // } // end of login
 
    // // Uses http.get() to load data from a single API endpoint
    // getCandidates() {
    //     return this.http.get('https://blooming-escarpment-58887.herokuapp.com/common/getAllUsers');
    // }
}