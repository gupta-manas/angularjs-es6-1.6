import component1Template from './component1.template.html';
export const component1 = {
    template: component1Template,
    controllerAs: 'c1ctrl',
    controller: 
    class component1ctrl{
        let a,b,res;
        constructor(a,b){
            this.a= a;
            this.b= b;
        }
        add(){
            res= a+b;
            return res;
        }
    }
}