import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {ApplicationService} from "../application.service";

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.css']
})
export class FormfieldsComponent implements OnInit {
  appId;
  eventId;
  states: [];
  fields = {
    select: [],
    text: [],
    textarea: [],
    radio: [],
    multi: [],
    checkbox: [],
    stateInput: [],
  };
  checkBoxes: [];
  form: [];

  constructor(private appComponent: AppComponent, private appService: ApplicationService) {
  }

  ngOnInit() {
    this.eventId = this.getURLParam('eventId');
    this.appId = this.getURLParam('appId');
    this.appService.getAppFields(this.appId, this.eventId).subscribe(
      formFields => {
        if (formFields.states) this.states = formFields.states;
        if (formFields.appFields && formFields.appFields.length) {
          formFields.appFields.forEach(one => {
            const type = (one.type === 'select' && one.name === 'state') ? 'stateInput' : one.type;
            if (one.selected) {
              if (this.fields[one.type] !== undefined) {
                this.fields[type].push(one);
              } else {
                this.fields[type] = [one];
              }
            }
          });
        }
      },
      err => {
        console.warn(err);
      }
    );
  }

  getURLParam(param) {
    return new URLSearchParams(window.location.search).get(param);
  }

  findOnJson(data, value) {
    return data.findIndex((item, i) => {
      return item.name === value;
    });
  }

  onSubmit(formElement) {
    if (formElement.valid) {
      const fields = JSON.parse(JSON.stringify(formElement.value));
      this.form = [];
      Object.keys(fields).forEach((key) => {
        if (key.indexOf('checkboxfield-') === -1) {
          this.form.push({
            name: key,
            value: formElement.value[key],
          });
        }
      });
      this.form = this.form.concat(this.checkBoxes);
      // console.log(this.form);
      this.appComponent.isCompletedFields = true;
    }
  }

  getCheckBoxes(inputName, inputValue, isChecked) {
    const index = this.findOnJson(this.checkBoxes, inputName);
    if (index === -1) {
      this.checkBoxes.push({
        name: inputName,
        value: [inputValue]
      });
    } else if (index !== -1 && isChecked) {
      this.checkBoxes[index].value.push(inputValue);
    } else if (index !== -1 && !isChecked) {
      const valueInd = this.checkBoxes[index].value.indexOf(inputValue);
      this.checkBoxes[index].value.splice(valueInd, 1);
    }
  }
}
