import {Component} from 'angular2/core';
import {RepoFinder} from './repo-finder';

@Component({
  selector: 'git-games-app',
  template: require('./git-games-app.tmpl.html'),
  styleUrls: ['src/containers/git-games-app.css'],
  directives: [RepoFinder] 
})
export class GitGamesApp {
  // stats:any = {};
};