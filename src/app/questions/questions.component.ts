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
              userAnswer: [],
              points: questions[i]['point'],
              correct: false
            });
          } else {
            this.userAnswers.push({
              id: i,
              question: questions[i].name,
              userAnswer: '',
              points: questions[i]['point'],
              correct: false
            });
          }
        }
      },
      (err) => {
        console.warn(err);
      });
  }

  findOnJson(data, value) {
    return data.findIndex((item) => {
      return item.key === value;
    });
  }

  compareArrays(questionId, answersArray) {
    for (let i in answersArray) {
      let answerId = this.findOnJson(this.questionList[questionId]['answers'], answersArray[i]);
      if (!this.questionList[questionId]['answers'][answerId]['right']) return false;
    }
    return true;
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
    if (this.userAnswers[this.currentQuestion]['userAnswer'].toString().trim().length === 0) {
      this.curQuestionMessage = 'You missed the answer';
      this.userAnswers[this.currentQuestion]['correct'] = 'skipped';
    } else {
      this.curQuestionMessage = (this.compareAnswer(this.currentQuestion)) ? 'Your answer is correct' : this.questionList[this.currentQuestion]['incorrect_message'];
      this.userAnswers[this.currentQuestion]['correct'] = this.compareAnswer(this.currentQuestion);
    }
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
    if (userQuestion['userAnswer'] === '') return false;
    if (this.questionList[curQuestionId]['type'] === 'text') {
      return (this.questionList[curQuestionId]['answer'] && userAnswer === this.questionList[curQuestionId]['answer']);
    } else if (this.questionList[curQuestionId]['type'] === 'checkbox') {
      return Array.isArray(userAnswer) && this.compareArrays(questionId, userAnswer);
    } else {
      let answerId = this.findOnJson(this.questionList[questionId]['answers'], userAnswer);
      return !Array.isArray(userAnswer) && this.questionList[questionId]['answers'][answerId]['right'];
    }
  }

  getScore() {
    for (let userQuestion of this.userAnswers) {
      const questionId = userQuestion['id'];
      if (this.compareAnswer(questionId)) this.score += Number(this.questionList[questionId]['point']);
    }
  }

  showScore() {
    // this.compareAnswers();
    this.getScore();
    this.showUserScore = true;
    setTimeout(() => {
      this.quizResultPercent = this.score / this.totalPoints * 100;
    }, 100);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}
