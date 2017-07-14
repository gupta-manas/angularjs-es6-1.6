import AppComponent from './app.component';
import headerModule from './components/appHeader/header.module';
import angular from 'angular';

export default angular
    .module('app', [headerModule])
    .component('app',AppComponent)
    .name;