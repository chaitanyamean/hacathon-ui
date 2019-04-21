import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-exam',
  templateUrl: './user-exam.component.html',
  styleUrls: ['./user-exam.component.css']
})
export class UserExamComponent implements OnInit {
  public userScoreDetails = {
        score: 0,
        skill: '', 
        skillId: '', 
        userId: ''
  }
  public questions: any[] = [];
  public userId: string = 'ANLXrUSva';
  public totalQuizScore:number = 0;
  public selectedAnswer_1: number;
  public selectedAnswer_2: number;
  public selectedAnswer_3: number;
  public selectedAnswer_4: number;
  public selectedAnswer_5: number;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userScoreDetails.userId = this.userId;
    this.userService.getQuestions(this.userId).subscribe(
      result => {
        let questionsData:any = result;
        this.questions = questionsData.data;
        this.userScoreDetails.skill = this.questions[0].skill;
        this.userScoreDetails.skillId = this.questions[0].skillId;
        console.log(this.questions)}
    )
  }
  public submit(){
    if(this.selectedAnswer_1 == this.questions[0].correctAnswer){
      this.totalQuizScore =+ 1;
    }
    if(this.selectedAnswer_2 == this.questions[1].correctAnswer){
      this.totalQuizScore =+ 1;
    }
    if(this.selectedAnswer_3 == this.questions[2].correctAnswer){
      this.totalQuizScore =+ 1;
    }
    if(this.selectedAnswer_4 == this.questions[3].correctAnswer){
      this.totalQuizScore =+ 1;
    }
    if(this.selectedAnswer_5 == this.questions[4].correctAnswer){
      this.totalQuizScore =+ 1;
    }
    
    this.userScoreDetails.score = this.totalQuizScore;
    this.userService.setUserScore(this.userScoreDetails).subscribe(
      result => result
    );
  }






}
