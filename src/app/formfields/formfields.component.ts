import {Component, OnInit} from '@angular/core';
import {MainComponent} from "../main/main.component";
import {ApplicationService} from "../application.service";
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.css']
})
export class FormfieldsComponent implements OnInit {
  appId;
  eventId;
  states;
  countries;
  countryDefault;
  categories;
  stateName;
  fields = {
    select: [],
    text: [],
    email: [],
    textarea: [],
    radio: [],
    multi: [],
    checkbox: [],
    stateInput: [],
    countryInput: [],
    category: []
  };
  checkBoxes;
  form;

  constructor(public mainComponent: MainComponent, private appService: ApplicationService, private titleService: Title, private router: Router) {
  }

  ngOnInit() {
    this.appService.appId = this.getURLParam('appId');
    this.appService.eventId = this.getURLParam('eventId');
    this.appService.companyToken = this.getURLParam('token');
    this.appService.getAppFields().subscribe(
      formFields => {
        this.checkBoxes = [];
        if (formFields['error'] || !formFields['appFields'] || !formFields['appFields'].length) {
          this.mainComponent.showLoader = false;
          return this.router.navigate(['/error']);
        }
        if (formFields['states']) this.states = formFields['states'];
        if (formFields['countries']) this.countries = formFields['countries'];
        if (formFields['categoryArray'].length) this.categories = formFields['categoryArray'];
        if (formFields['countryDefault']) this.countryDefault = formFields['countryDefault'];
        if (formFields['appFields'] && formFields['appFields'].length) {
          formFields['appFields'].forEach(one => {
            let type = one.type;
            if (one.type === 'select' && one.name === 'state') type = "stateInput";
            else if (one.type === 'select' && one.name === 'country') type = "countryInput";
            if (one.selected) {
              if (this.fields[one.type] !== undefined) {
                this.fields[type].push(one);
                if (type === 'checkbox') {
                  for (let option of one.options) {
                    this.getCheckBoxes(one.name, option.key, option.default);
                  }
                }
              } else {
                this.fields[type] = [one];
              }
            }
          });
        }
        this.mainComponent.showLoader = false;
        if (formFields['appName']) this.titleService.setTitle(formFields['appName']);
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
    return data.findIndex((item) => {
      return item.name === value;
    });
  }

  updateStates(country) {
    this.appService.getStates(country).subscribe(
      states => {
        this.states = states['states'];
        this.stateName = states['states'][0] ? states['states'][0]['code'] : null;
      }
    )
  }

  changeForm(formData: NgForm) {
    this.mainComponent.formFieldData = formData;
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
      if (this.checkBoxes && this.checkBoxes.length) this.form = this.form.concat(this.checkBoxes);
      this.appService.sendData['formFields'] = this.form;
      this.mainComponent.isCompletedFields = true;
    }
  }

  getCheckBoxes(inputName, inputValue, isChecked) {
    const index = this.findOnJson(this.checkBoxes, inputName);
    if (index === -1) {
      this.checkBoxes.push({
        name: inputName,
        value: (isChecked) ? [inputValue] : []
      });
    } else if (index !== -1 && isChecked) {
      this.checkBoxes[index].value.push(inputValue);
    } else if (index !== -1 && !isChecked) {
      const valueInd = this.checkBoxes[index].value.indexOf(inputValue);
      if (valueInd !== -1) this.checkBoxes[index].value.splice(valueInd, 1);
    }
  }
}
