import { Component, OnInit } from '@angular/core';

import * as CanvasJS from '../../../assets/canvasjs.min';

@Component({
  selector: 'app-candidate-score-bar',
  templateUrl: './candidate-score-bar.component.html',
  styleUrls: ['./candidate-score-bar.component.css']
})
export class CandidateScoreBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "dark1", // "light1", "light2", "dark1", "dark2"
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
        dataPoints: [
          { label: "Angular", y: 70 },	
          { label: "Node Js", y: 80 },	
          { label: "Html", y: 90 },
          { label: "CSS", y: 60 },	
          { label: "MongoDB", y: 70 }
        ]
      }]
    });
    chart.render();
    }
  }
