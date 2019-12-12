import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {globals} from './globals';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  hostname = globals.getHostName();
  protocol = globals.getProtocol() + "//";
  getAppFieldsURL: string = this.protocol + this.hostname + '/get-app-fields/';
  // getQuestionsURL: string = this.protocol + this.hostname + '/get-questions/55';
  getQuestionsURL: string = '/assets/quiz-json.json';

  constructor(private http: HttpClient) {
  }

  getQuestions() {
    return this.http.get(this.getQuestionsURL);
  }

  getAppFields(appId: any, eventId: any) {
    return this.http.get(this.getAppFieldsURL + appId + '?eventId=' + eventId + '');
    // For Local use function below
    // return this.http.get(this.getAppFieldsURL);
  }
}
