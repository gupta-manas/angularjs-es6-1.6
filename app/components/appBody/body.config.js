export default function appConfig($stateProvider){
    $stateProvider
    .state('add',{
        url: '/add',
        component: 'addComponent'
    })
    .state('sub',{
        url: '/sub',
        component: 'subComponent'
    })
    .state('mul',{
        url: '/mul',
        component: 'mulComponent'
    })
    .state('div',{
        url: '/div',
        component: 'divComponent'
    })
}