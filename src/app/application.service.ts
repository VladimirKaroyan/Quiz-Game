import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {globals} from './globals';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  appId;
  eventId;
  companyToken;
  hostname = globals.getHostName();
  protocol = globals.getProtocol() + '//';
  getAppFieldsURL: string = this.protocol + this.hostname + '/get-app-fields/';
  getAppDataURL: string = this.protocol + this.hostname + '/api/v2/quizgame/info';
  getStatesDataURL: string = this.protocol + this.hostname + '/get-states-data';
  postDataURL: string = this.protocol + this.hostname + '/api/v2/quizgame/answer';

  requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST'
    }
  };
  sendData = {
    formFields: [],
    answers: []
  };

  constructor(private http: HttpClient) {
  }

  getGameInfo() {
    return this.http.get(this.getAppDataURL + '?appId=' + this.appId + '&eventId=' + this.eventId + '&token=' + this.companyToken + '', this.requestOptions);
  }

  getAppFields() {
    return this.http.get(this.getAppFieldsURL + this.appId + '?eventId=' + this.eventId + '', this.requestOptions);
    // For Local use function below
    // return this.http.get(this.getAppFieldsURL);
  }

  getStates(country) {
    return this.http.get(this.getStatesDataURL + '/' + country);
  }

  postAppData(answers) {
    this.sendData['appId'] = this.appId;
    this.sendData['eventId'] = this.eventId;
    this.sendData['token'] = this.companyToken;
    this.sendData['answers'] = answers;
    return this.http.post(this.postDataURL, this.sendData, this.requestOptions);
  }
}
