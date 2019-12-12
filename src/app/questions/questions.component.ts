import {Component, OnInit} from '@angular/core';
import {ApplicationService} from "../application.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})

export class QuestionsComponent implements OnInit {
  showUserScore = false;
  currentQuestion = 0;
  inputsDisabled = false;
  questions;
  score: any = 0;
  quizResult: string;
  quizResultPercent = 0;

  constructor(private appService: ApplicationService) {
  }

  ngOnInit() {
    this.appService.getQuestions().subscribe(
      questions => {
        this.questions = questions;
      },
      (err) => {
        console.warn(err);
      });
  }

  selectAnswer(answer, event) {
    if (answer !== this.questions[this.currentQuestion].answer) {
      event.target.classList.add('wrong');
      // Disable all inputs when answer is selected
      this.inputsDisabled = true;
      // Change question after 2 seconds
      setTimeout(() => {
        this.changeQuestion();
      }, 2000);
    } else {
      this.score++;
      event.target.classList.add('right');
      // Disable all inputs when answer is selected
      this.inputsDisabled = true;
      // Change question after 2 seconds
      setTimeout(() => {
        this.changeQuestion();
      }, 2000);
    }
  }

  changeQuestion() {
    this.currentQuestion++;
    this.inputsDisabled = false;
    // Check if questions are over
    if (this.currentQuestion === this.questions.length) {
      this.showScore();
    }
  }

  showScore() {
    this.showUserScore = true;
    this.quizResult = this.score.toString() + '/' + this.questions.length.toString();
    setTimeout(() => {
      this.quizResultPercent = this.score / this.questions.length * 100;
    }, 100);
  }
}
