import {Component, OnInit} from '@angular/core';
import {ApplicationService} from "../application.service";
import {MainComponent} from "../main/main.component";
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})

export class QuestionsComponent implements OnInit {
  isOnePage = false;
  next_button_color = '#0069d9';
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

  constructor(private appService: ApplicationService, private mainComp: MainComponent, private router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.appService.getGameInfo().subscribe(
      gameData => {
        this.questionList = gameData['questions'];
        this.next_button_color = "#" + gameData['next_button_color'];
        this.mainComp.background_color = "#" + gameData['background_color'];
        this.mainComp.background_image = "url(" + gameData['background_image'] + ")";
        for (let i in this.questionList) {
          this.totalPoints += Number(this.questionList[i]['point']);
          this.userAnswers.push({
            id: i,
            question: this.questionList[i].name,
            userAnswer: [],
            points: this.questionList[i]['point'],
            isRequired: this.questionList[i].required,
            correct: 'skipped'
          });
        }
      },
      (err) => {
        console.warn(err);
        this.mainComp.showLoader = false;
        return this.router.navigate(['/error']);
      });
  }

  findOnJson(data, value) {
    return data.findIndex((item) => {
      return item.key === value;
    });
  }

  compareArrays(questionId, answersArray) {
    let rightAnswersCount = this.questionList[questionId]['options'].filter((i) => {
      return i.right === true
    }).length;
    if (rightAnswersCount !== answersArray.length) return false;
    for (let i in answersArray) {
      let answerId = this.findOnJson(this.questionList[questionId]['options'], answersArray[i]);
      if (!this.questionList[questionId]['options'][answerId]['right']) return false;
    }
    return true;
  }

  selectAnswer(questionId, answer) {
    this.userAnswers[questionId].userAnswer = [answer];
    if (!this.isOnePage) this.changeQuestionStatus(questionId);
  }

  selectCheckBoxAnswer(questionId, answer, isChecked) {
    if (isChecked) {
      this.userAnswers[questionId].userAnswer.push(answer);
    } else {
      const valueInd = this.userAnswers[questionId].userAnswer.indexOf(answer);
      if (valueInd !== -1) this.userAnswers[questionId].userAnswer.splice(valueInd, 1);
    }
    if (!this.isOnePage) this.changeQuestionStatus(questionId);
  }

  changeQuestionStatus(questionId) {
    if (!this.userAnswers[questionId]['userAnswer'][0] || this.userAnswers[questionId]['userAnswer'][0].toString().trim().length === 0) {
      this.curQuestionMessage = 'You missed the answer';
      this.userAnswers[questionId]['correct'] = 'skipped';
      this.curQuestionResult = 'Skipped';
    } else {
      this.curQuestionMessage = (this.compareAnswer(questionId)) ? 'Your answer is correct' : this.questionList[questionId]['incorrect_message'];
      this.userAnswers[questionId]['correct'] = this.compareAnswer(questionId) ? 'right' : 'wrong';
      this.curQuestionResult = (this.compareAnswer(this.currentQuestion) ? 'Correct' : 'Incorrect');
    }
  }

  changeQuestion() {
    let that = this;
    this.changeQuestionStatus(this.currentQuestion);
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
    if (userQuestion['userAnswer'][0] === '') return false;
    if (this.questionList[curQuestionId]['type'] === 'text') {
      return (this.questionList[curQuestionId]['answer'] && userAnswer[0] === this.questionList[curQuestionId]['answer']);
    } else if (this.questionList[curQuestionId]['type'] === 'checkbox') {
      return this.compareArrays(questionId, userAnswer);
    } else {
      let answerId = this.findOnJson(this.questionList[questionId]['options'], userAnswer[0]);
      return answerId !== -1 && this.questionList[questionId]['options'][answerId]['right'];
    }
  }

  getScore() {
    for (let userQuestion of this.userAnswers) {
      const questionId = userQuestion['id'];
      if (this.compareAnswer(questionId) && userQuestion['correct'] !== 'skipped') this.score += Number(this.questionList[questionId]['point']);
    }
  }

  reqQuestionsValid() {
    return this.userAnswers.filter((answer) => {
      return answer.isRequired && (!answer.userAnswer.length || answer.userAnswer[0].toString().trim() === '');
    }).length === 0
  }

  showScore() {
    // this.compareAnswers();
    this.mainComp.showLoader = true;
    this.getScore();
    this.appService.postAppData(this.userAnswers).subscribe(
      (result) => {
        this.mainComp.showLoader = false;
        this.showUserScore = true;
        setTimeout(() => {
          this.quizResultPercent = this.score / this.totalPoints * 100;
        }, 100);
        setTimeout("location.reload()", 3000);
      },
      (err) => {
        this._snackBar.open("Error " + err.status + ": " + err.statusText, `Close`, {
          duration: 4000,
        });
        setTimeout("location.reload()", 3000);
        console.warn(err)
      });
  }
}
