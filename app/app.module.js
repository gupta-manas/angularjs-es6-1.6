import component1 from './component1/';
import component2 from './component2/';
import component3 from './component3/';
import AppComponent from './app.component';
import appConfig from './app.config';

angular
    .module('app', [component1, component2, component3])
    .config(appConfig)
    .component('app',AppComponent)