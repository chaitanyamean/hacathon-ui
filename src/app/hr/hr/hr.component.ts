import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from './employee.service';
import * as CanvasJS from '../../../assets/canvasjs.min';

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
  mobileNumber: number
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

  public selectedCandidate = [];

  public candidates = [];

  public skills = [];

  public filteredEmployees: string[];

  public displayedColumns: string[] = [];

  public bar = {};

  constructor(public dialog: MatDialog,
    private employeeService: EmployeeService) { }

  public openEmployeeDialog(index): void {
    this.selectedCandidate = this.candidates[index];

    console.log(this.selectedCandidate);
    const dialogRef = this.dialog.open(EmployeeDetailsDialog, {
      width: '600px',
      height: "700px",
      data: this.selectedCandidate
    });

    console.log(event);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    
    this.employeeService.getCandidates().subscribe(
      (success) => this.onGetCandidatesSuccess(success),
      (error) => this.onGetCandidatesFailure(error)
    )

    this.displayedColumns = ['Name', 'Email', 'MobileNumber', 'Details'];

    this.bar = {
      barChartOptions : {
        scaleShowVerticalLines: false,
        responsive: true
      },
      barChartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      barChartType:'bar',
      barChartLegend:true
    }


var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title: {
		text: "GDP Growth Rate - 2016"
	},
	axisY: {
		title: "Growth Rate (in %)",
		suffix: "%",
		includeZero: false
	},
	axisX: {
		title: "Countries"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#\"%\"",
		dataPoints: [
			{ label: "India", y: 7.1 },	
			{ label: "China", y: 6.70 },	
			{ label: "Indonesia", y: 5.00 },
			{ label: "Australia", y: 2.50 },	
			{ label: "Mexico", y: 2.30 },
			{ label: "UK", y: 1.80 },
			{ label: "United States", y: 1.60 },
			{ label: "Japan", y: 1.60 }
			
		]
	}]
});
chart.render();
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

  private onGetCandidatesSuccess(data): void {
    this.candidates = data.data;
  }

  private onGetCandidatesFailure(error): void {
    window.alert("Error Fetching Details");
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
    @Inject(MAT_DIALOG_DATA) public data: CandidateDetails,
    @Inject(MAT_DIALOG_DATA) public bar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
