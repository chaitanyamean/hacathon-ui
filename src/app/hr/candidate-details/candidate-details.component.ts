import { Component, OnInit } from '@angular/core';

import * as CanvasJS from '../../../assets/canvasjs.min';
import { EmployeeService } from '../hr-module/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  public id: string = "";
  public name: string = "";
  public noticePeriod: string = ""
  public data: any;
  constructor(public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
  }

  ngOnInit() {
    this.employeeService.getCandidateDetails(this.id).subscribe(
      (success) => this.getCandidateDetailsSuccess(success),
      (error) => this.getCandidateDetailsError(error)
    );
  }

  public goBack(): void {
    this.router.navigate(['/Candidates']);
  }

  private getCandidateDetailsSuccess(data): void {
    this.data = data.data;
    this.noticePeriod = this.data.noticePeriod + "   Days";
    this.prepareScoreChart(this.data);
  }

  private prepareScoreChart(data): void {
    let score = [];

    data.skillSet.forEach(element => {
      score.push({
        label:element.tags,
        y: Math.floor(Math.random() * 51) + 50
      })
    });
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Candidate Skill set and his score on Individual Skill"
      },
      axisY: {
        title: "Score",
        suffix: "%",
        includeZero: true
      },
      axisX: {
        title: "Score"
      },
      data: [{
        type: "column",
        yValueFormatString: "#,##0.0#\"%\"",
        dataPoints: score
        // dataPoints: [
        //   { label: data.skillSet[i].tags[i], y: 70 },
        //   { label: "Node Js", y: 80 },
        //   { label: "Html", y: 90 },
        //   { label: "CSS", y: 60 },
        //   { label: "MongoDB", y: 70 }
        // ]
      }]
    });
    chart.render();
  }

  private getCandidateDetailsError(error): void {
    console.log(error);
  }
}
