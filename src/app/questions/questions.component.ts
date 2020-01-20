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
  questionList;
  curQuestionResult;
  curQuestionMessage;
  showAnswerModal = false;
  userAnswers = [];
  score: any = 0;
  quizResultPercent = 0;
  totalPoints = 0;

  constructor(private appService: ApplicationService) {
  }

  ngOnInit() {
    this.appService.getQuestions().subscribe(
      questions => {
        this.questionList = questions;
        for (let i in questions) {
          this.totalPoints += Number(questions[i]['point']);
          if (questions[i]['type'] === 'checkbox') {
            this.userAnswers.push({
              id: i,
              question: questions[i].name,
              userAnswer: []
            });
          } else {
            this.userAnswers.push({
              id: i,
              question: questions[i].name,
              userAnswer: ''
            });
          }
        }
      },
      (err) => {
        console.warn(err);
      });
  }

  compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false;
    }
    let a1 = arr1.map(e => JSON.stringify(e)).sort();
    let a2 = arr2.map(e => JSON.stringify(e)).sort();
    return !a1.map((e, i) => e == a2[i]).includes(false);
  }

  selectAnswer(answer) {
    this.userAnswers[this.currentQuestion].userAnswer = answer;
  }

  selectCheckBoxAnswer(answer, isChecked) {
    if (isChecked) {
      this.userAnswers[this.currentQuestion].userAnswer.push(answer);
    } else {
      const valueInd = this.userAnswers[this.currentQuestion].userAnswer.indexOf(answer);
      if (valueInd !== -1) this.userAnswers[this.currentQuestion].userAnswer.splice(valueInd, 1);
    }
  }

  changeQuestion() {
    let that = this;
    this.curQuestionResult = (this.compareAnswer(this.currentQuestion) ? 'Correct' : 'Incorrect');
    this.curQuestionMessage = (this.compareAnswer(this.currentQuestion) ? 'Your answer is correct' : this.questionList[this.currentQuestion]['incorrect_message']);
    this.showAnswerModal = true;
    setTimeout(() => {
      that.currentQuestion++;
      this.showAnswerModal = false;
      this.curQuestionResult = '';
      this.curQuestionMessage = '';
      // Check if questions are over
      if (that.currentQuestion === that.questionList.length) {
        that.showScore();
      }
    }, 3000);
  }

  compareAnswer(curQuestionId) {
    let userQuestion = this.userAnswers[curQuestionId];
    const questionId = userQuestion['id'];
    const userAnswer = userQuestion['userAnswer'];
    return (Array.isArray(userAnswer) && this.compareArrays(userAnswer, this.questionList[questionId].answer)) || (userAnswer === this.questionList[questionId].answer);
  }

  getScore() {
    for (let userQuestion of this.userAnswers) {
      const questionId = userQuestion['id'];
      const userAnswer = userQuestion['userAnswer'];
      if (Array.isArray(userAnswer) && this.compareArrays(userAnswer, this.questionList[questionId].answer)) this.score += Number(this.questionList[questionId]['point']);
      else if (userAnswer === this.questionList[questionId].answer) this.score += Number(this.questionList[questionId]['point']);
    }
  }

  showScore() {
    // this.compareAnswers();
    this.getScore();
    // this.compareAnswers();
    this.showUserScore = true;
    setTimeout(() => {
      this.quizResultPercent = this.score / this.totalPoints * 100;
    }, 100);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}
