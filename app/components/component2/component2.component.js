import component2Template from './component2.template.html';
export const component2 = {
    template: component2Template,
    controllerAs: 'c2ctrl',
    controller: 
    class component2ctrl{
        sub(a,b){
            return a-b;
        }
    }
}