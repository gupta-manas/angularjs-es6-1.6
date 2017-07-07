import component3Template from './component3.template.html';
export const component3 = {
    template: component3Template,
    controllerAs: 'c3ctrl',
    controller: 
    class component3ctrl{
        mul(a,b){
            return a*b;
        }
    }
}