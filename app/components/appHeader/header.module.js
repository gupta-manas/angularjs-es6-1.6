import headerComponent from './header.component';
import bodyModule from '../appBody/body.module';
import angular from 'angular';

export default angular
    .module('headerModule', [bodyModule])
    .component('appHeader', headerComponent)
    .name;