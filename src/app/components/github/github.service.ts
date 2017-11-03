import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
  export class GithubService {

    constructor(private http: Http) {

    }
    searchUser() {
       return this.http.get('https://api.github.com/users/iam-karthick' ).map(res => res.json());
    }
  }
