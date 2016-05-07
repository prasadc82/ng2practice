import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RepoList} from '../services/repo-list';
import {Control} from 'angular2/common';

import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

//alternatively all the imports can be written as
import 'rxjs/Rx';

@Component({
  selector: 'repo-finder',
  template: require('./repo-finder.tmpl.html'),
  styleUrls:['src/components/repo-finder.css'],
  providers: [RepoList]
})
// export class RepoFinder {
//   @Input() placeholder : string;
//   @Input() datalistId: string;
//   @Output() stats = new EventEmitter();

//   repos: Observable<Array<string>>;
//   repoNameStartsWith = new Control();
//   repoName = new Control();

//   constructor(private _repoList: RepoList){
//     this.repos = this.repoNameStartsWith.valueChanges
//                           .debounceTime(400)
//                           .distinctUntilChanged()
//                           .switchMap((repoNameStartsWith:string) => {
//                             return this._repoList.getRepos(repoNameStartsWith);
//                           });
//   };
// }

// alternate way of doing
export class RepoFinder {
  @Input() placeholder : string;
  @Input() datalistId: string;
  @Output() stats = new EventEmitter();

  repoNameStartsWith :string = '';


  private searchTermStream = new Subject<string>();
  repoName = new Control();

  constructor(private _repoList: RepoList){

  };

  searchRepo(value: string){
    if(!value) {
      return;
    }
    this.searchTermStream.next(value);
  }

  repos:Observable<string[]> = this.searchTermStream
    .debounceTime(900)
    .distinctUntilChanged()
    .switchMap((term:string) => this._repoList.getRepos(term));

}
