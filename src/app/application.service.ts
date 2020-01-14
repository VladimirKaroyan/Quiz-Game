import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {globals} from './globals';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  hostname = globals.getHostName();
  protocol = globals.getProtocol() + '//';
  getAppFieldsURL: string = this.protocol + this.hostname + '/get-app-fields/';
  // getQuestionsURL: string = this.protocol + this.hostname + '/get-questions/55';
  getQuestionsURL: string = '/assets/quiz-json.json';
  requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    }
  };

  constructor(private http: HttpClient) {
  }

  getQuestions() {
    return this.http.get(this.getQuestionsURL, this.requestOptions);
  }

  getAppFields(appId: any, eventId: any) {
    return this.http.get(this.getAppFieldsURL + appId + '?eventId=' + eventId + '', this.requestOptions);
    // For Local use function below
    // return this.http.get(this.getAppFieldsURL);
  }
}
