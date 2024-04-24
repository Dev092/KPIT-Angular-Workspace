class sumofdigit{
    num:number;
    constructor(n:number){
        this.num=n;
    }
    sum:number=0;
    getsumdigit(){
        while(this.num!==0){
           this.sum=this.sum+(this.num%10);
           this.num=Math.floor(this.num/=10);
        }
       console.log(this.sum);
    }
}
let obj:sumofdigit=new sumofdigit(1);
obj.getsumdigit();