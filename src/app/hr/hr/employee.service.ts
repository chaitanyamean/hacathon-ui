import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
 
@Injectable()
export class EmployeeService {
    httpHeaders = new HttpHeaders();
    httpOptions: any;
    token: string;
 
    constructor(private http:HttpClient) {
        this.token = localStorage.getItem('token');
    }

  


    url = 'https://blooming-escarpment-58887.herokuapp.com/common/getAllUsers';
 
    // Uses http.get() to load data from a single API endpoint
    getCandidates() {

  this.httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
    })
    }
    let response = this.http.get(`${this.url}`, this.httpOptions);
    return response;


    }
}