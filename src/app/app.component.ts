import {Component, OnInit} from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown',
        style({
          display: 'flex',
          visibility: 'visible',
          opacity: 1
        })),
      state('hidden',
        style({
          display: 'none',
          visibility: 'hidden',
          opacity: 0
        })),
      transition('shown => hidden', animate('1s')),
      transition('hidden => shown', animate('2s')),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'QuizGame';
  showLoader = true;
  isCompletedFields = false;

  ngOnInit() {
  }
}
