import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

export interface Employee {
  name: string,
  email: string,
  mobileNo: number
}

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
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

  public skills = [];

  public filteredEmployees: string[];

  public displayedColumns: string[] = [];

  constructor(public dialog: MatDialog) { }

  public openEmployeeDialog(event): void {
    const dialogRef = this.dialog.open(EmployeeDetailsDialog, {
      width: '600px',
      height: "700px",
      data: this.candidateDetails[0]
    });

    console.log(event);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    
    this.displayedColumns = ['Id', 'Name', 'Probabaility', 'Designation', 'Skills'];
    // this.dataSource = this.candidateDetails;
  }

  public getFilteredEmployees(event: any): void {
    // this.dataSource = this.candidateDetails.filter(function(el) {
    //   return el.skills == event.trim();
    //   })
    console.log(event);
  }

  public openEmployeeDetails(event): void {
    console.log("Open Popup");
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../employee-details-dialog.html',
  styleUrls: ['../employee-details-dialog.css']
})
export class EmployeeDetailsDialog {

  constructor(
    public dialogRef: MatDialogRef<EmployeeDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CandidateDetails) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
