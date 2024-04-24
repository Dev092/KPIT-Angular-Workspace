class A{
    a:number=6;
    b:number=8;
  
    addnumber():number{
        return this.a+this.b;
    }

}
let a:A =new A();
let result=a.addnumber();
console.log(result);


