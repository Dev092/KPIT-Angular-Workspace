class factorial{
    n:number;

     i:number;
     ans:number=1;
     constructor(num){
        this.n = num;

    }
     fact(){

        for( this.i=1;this.i<=this.n;this.i++){
            this.ans*=this.i;
        }

     }

    display(){
        console.log(this.ans);
    }

    
}

 let fac:factorial=new factorial(4);
 fac.fact();
 fac.display();