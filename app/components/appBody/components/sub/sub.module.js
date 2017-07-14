import subComponent from './sub.component';
import angular from 'angular';

export default angular
    .module('subModule', [])
    .component('subComponent', subComponent)
    .name;