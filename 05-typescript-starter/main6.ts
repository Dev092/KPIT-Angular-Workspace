class table{
    n:number;
    i:number=1;
    print(){
        for(this.i;this.i<=10;this.i++){
            console.log(this.n+"*"+this.i+"="+this.n*this.i);
        }
    }
    constructor(num:number)
    {
        this.n=num;
    }
}

let t:table=new table(2);
t.print();