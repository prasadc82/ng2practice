import { Injectable } from 'angular2/core';
import {URLSearchParams, Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RepoList {

  constructor(private http: Http) {};

  getRepos(startsWith: string) {

    let search = new URLSearchParams();
    // Setting params
    search.set('q', startsWith); //  || 'sample');
    search.set('language', 'javascript');
    search.set('format', 'json');
    search.set('sort', 'stars');
    search.set('order', 'desc');

    // call
    return this.http
                .get('https://api.github.com/search/repositories', { search })
                .map(response => response.json().items )
                .map(items => items.slice(0,10))
                .catch((err) => {
                  console.error('Error: ' + err.json().message);
                  return Observable.of([]);
                });
  }
}
