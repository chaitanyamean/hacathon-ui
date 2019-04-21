import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

import * as CanvasJS from '../../../assets/canvasjs.min';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  detailsRes: any;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  userId: String;

  constructor(private router: Router, private userService: UserServiceService) {
this.userId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.getUserDetails();

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Skills Data"
      },
      axisY: {
        title: "Growth Rate (in points)",
        suffix: "",
        includeZero: false
      },
      axisX: {
        title: "Skills"
      },
      data: [{
        type: "column",
        yValueFormatString: "#,##0.0#\"%\"",
        dataPoints: [
          { label: "Node", y: 7.1 },
          { label: "Angular", y: 6.70 },
          { label: "Css", y: 5.00 },
          { label: "HTML", y: 2.50 }
        ]
      }]
    });
    chart.render();

  }

  onClickFill() {
    this.router.navigate(['/user-details']);
  }

  getUserDetails() {
    this.userService.getEmpDetails(this.userId).subscribe(data => {
      console.log(data);
      this.detailsRes  = data;
      if (this.detailsRes['status'] === 200) {
        console.log(this.detailsRes.data.skillSet);
      }
    });
  }
}
