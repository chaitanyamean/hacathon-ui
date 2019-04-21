import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeService } from '../hr-module/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface CandidateDetails {
  name: string,
  userId: string,
  location: string,
  noticePeriod: number,
  isActivelyLookingforJob: boolean,
  empDetailsId: number,
  emailId: string,
  salary: string
}

export interface Candidate {
  name: string,
  email: string,
  mobileNumber: number,
  isUser: boolean,
  userId: string
}

@Component({
  selector: 'app-hr',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrComponent implements OnInit {

  public candidateDetails: CandidateDetails = {
    name: "",
    userId: "",
    location: "",
    noticePeriod: null,
    isActivelyLookingforJob: false,
    empDetailsId: null,
    emailId: "",
    salary: ""
  };

  // public selectedCandidate: Candidate = [{
  //   name: "",
  //   email: "",
  //   mobileNumber: null,
  //   isUser: false,
  //   userId: ""
  // }];

  public candidates = [];

  public skills = [];

  public filteredEmployees: string[];

  public displayedColumns: string[] = [];

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) { }

  public openEmployeeDetails(index): void {
    let selectedCandidate = this.candidates[index]; 
    this.router.navigate(['/employeeDetails',selectedCandidate.userId,selectedCandidate.name]);
  }

  ngOnInit() {
    
    this.employeeService.getCandidates().subscribe(
      (success) => this.onGetCandidatesSuccess(success),
      (error) => this.onGetCandidatesFailure(error)
    )

    this.displayedColumns = ['Name', 'Email', 'MobileNumber', 'Details'];
  }

  public getFilteredEmployees(event: any): void {
    // this.dataSource = this.candidateDetails.filter(function(el) {
    //   return el.skills == event.trim();
    //   })
    console.log(event);
  }

  private onGetCandidatesSuccess(data): void {
    this.candidates = data.data;
  }

  private onGetCandidatesFailure(error): void {
    window.alert("Error Fetching Details");
  }
}