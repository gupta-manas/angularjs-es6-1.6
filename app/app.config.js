export default function appConfig($stateProvider){
    $stateProvider
    .state('add',{
        url: '/add',
        component: 'component1'
    })
    .state('sub',{
        url: '/sub',
        component: 'component2'
    })
    .state('mul',{
        url: '/mul',
        component: 'component3'
    })
}