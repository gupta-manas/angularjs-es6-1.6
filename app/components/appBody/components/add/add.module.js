import addComponent from './add.component';
import angular from 'angular';

export default angular
    .module('addModule', [])
    .component('addComponent', addComponent)
    .name;