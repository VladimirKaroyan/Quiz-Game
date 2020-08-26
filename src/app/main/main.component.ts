import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
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
      transition('shown => hidden', animate('0.1s')),
      transition('hidden => shown', animate('0.1s')),
    ])
  ]
})
export class MainComponent implements OnInit {
  showLoader: boolean = true;
  isCompletedFields: boolean = false;
  formFieldData;
  pageStyle: string;
  showUserScore: boolean = false;
  background_color;
  background_image;

  constructor() {
  }

  ngOnInit() {
  }

}
