class fibnochi{
    num:number;
    res:number=0;
    a:number=0;
    b:number=1;
    i:number;
    print(){
        if(this.num==1){
            console.log(this.a)
        }
        if(this.num==2){
            console.log(this.b);
        }
        for(this.i=2;this.i<this.num;this.i++){
            let c=this.a+this.b;
            console.log(c);
            this.a=this.b;
            this.b=c;
            
            
    
        }
    }
    constructor(n:number){
        this.num=n;
    }
}

let feb:fibnochi=new fibnochi(6);
feb.print();