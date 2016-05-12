import {Component} from 'angular2/core';
import {RepoFinder} from '../components/repo-finder';

@Component({
  selector: 'git-games-app',
  template: require('./git-games-app.tmpl.html'),
  styleUrls: ['src/containers/git-games-app.css'],
  directives: [RepoFinder] 
})
export class GitGamesApp {
  // Check for empty objects
  isStatsEmpty(input){
    if (input){
      return Object.keys(input).length === 0;
    }
    return true;
  }
};