import {Headers, Http, RequestOptions} from '@angular/http';
import {Inject} from '@angular/core';

@Inject
export class AuthService {

  PROTOCOL = 'http://';
  HOST = 'localhost';
  // HOST = '35.158.129.219';
  PORT = '8082';
  CONTEXT = '/';
  PATH = 'auth';
  AUTH_URL = this.PROTOCOL + this.HOST + ':' + this.PORT + this.CONTEXT + this.PATH;
  private headers = new Headers({'Context-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {}

  signupUser(username: string, password: string) {

  }

  signinUser(username: string, password: string) {

  }

  getToken(): String {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const token = currentUser && currentUser.token;
    // return token ? token : '';
    return '';
  }

  isAuthenticated() {
    return this.getToken() !== '';
  }

  logout() {
    // localStorage.removeItem('currentUser');
  }
}
