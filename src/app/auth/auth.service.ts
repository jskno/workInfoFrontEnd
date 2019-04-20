import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  PROTOCOL = 'http://';
  HOST = 'localhost';
  // HOST = '35.158.129.219';
  PORT = '8082';
  CONTEXT = '/';
  PATH = 'auth';
  AUTH_URL = this.PROTOCOL + this.HOST + ':' + this.PORT + this.CONTEXT + this.PATH;

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {}

  signupUser(username: string, password: string) {

  }

  signinUser(username: string, password: string): Observable<boolean> {
    return this.http.post(this.AUTH_URL, JSON.stringify({username: username, password: password}), this.options)
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {
          return false;
        }
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getToken(): String {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;
    return token ? token : '';
  }

  isAuthenticated() {
    return this.getToken() !== '';
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
