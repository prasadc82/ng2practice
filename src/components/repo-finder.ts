import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RepoList} from '../services/repo-list';
import {Control} from 'angular2/common';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'repo-finder',
  template: require('./repo-finder.tmpl.html'),
  styleUrls:['src/components/repo-finder.css'],
  providers: [RepoList]
})
export class RepoFinder {
  @Input() placeholder : string;
  @Output() stats = new EventEmitter();
  
  repos: Observable<Array<string>>;
  repoNameStartsWith = new Control();
  repoName = new Control();
  
  constructor(private _repoList: RepoList){
    this.repos = this.repoNameStartsWith.valueChanges
                          .debounceTime(400)
                          .distinctUntilChanged()
                          .switchMap((repoNameStartsWith:string) => {
                            return this._repoList.getRepos(repoNameStartsWith);
                          });
  };
};