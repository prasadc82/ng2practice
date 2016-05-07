import 'es5-shim';
import 'es6-shim';
import 'es6-promise';
import '../shims/shims_for_IE';

import 'bootstrap/dist/css/bootstrap.css';

import 'angular2/bundles/angular2-polyfills';


import {bootstrap} from 'angular2/platform/browser';
import {GitGamesApp} from './containers/git-games-app';

import { HTTP_PROVIDERS } from 'angular2/http';

bootstrap(GitGamesApp, [HTTP_PROVIDERS]).catch(err => console.error(err));;
