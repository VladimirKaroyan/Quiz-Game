import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})

export class QuestionsComponent implements OnInit {
  showUserScore = false;
  questions = [
    {
      question: 'Which picture shows a Parrot?',
      options: {
        option1: 'Parrot.png',
        option2: 'sss',
        option3: 'vv',
        option4: 'rte',
      },
      answer: 'option3'
    },
    {
      question: 'Which picture shows a Peacock?',
      options: {
        option1: 'dsad.png',
        option2: 'gfsdfg.png',
        option3: 'gfhgf.png',
        option4: 'jkhkjh.png',
      },
      answer: 'option4'
    },
    {
      question: 'Which picture shows a Cockatoo?',
      options: {
        option1: 'gdfg.png',
        option2: 'Cardgffdinal.png',
        option3: 'sdfadas.png',
        option4: 'dasda.png',
      },
      answer: 'option1'
    },
    {
      question: 'Which picture shows a Toucan?',
      options: {
        option1: 'jkhkgh.png',
        option2: 'jghjghjgh.png',
        option3: 'hg.png',
        option4: 'l;kj;kl;kl.png',
      },
      answer: 'option2'
    },
    {
      question: 'Which picture shows a Quetzal?',
      options: {
        option1: 'sdadas.png',
        option2: 'dsadssads.png',
        option3: 'hjgjghjk.png',
        option4: 'iuyiyu.png',
      },
      answer: 'option3'
    }
  ];
  currentQuestion = 0;
  inputsDisabled = false;
  score = 0;
  quizResult: string;
  quizResultPercent = 0;

  constructor() {
  }

  ngOnInit() {
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
