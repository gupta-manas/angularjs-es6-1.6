import bodyConfig from './body.config';
import bodyComponent from './body.component';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addModule from './components/add/add.module';
import divModule from './components/div/div.module';
import mulModule from './components/mul/mul.module';
import subModule from './components/sub/sub.module';

export default angular
    .module('bodyModule', [uiRouter, addModule,divModule,mulModule,subModule])
    .config(bodyConfig)
    .component('appBody', bodyComponent)
    .name;