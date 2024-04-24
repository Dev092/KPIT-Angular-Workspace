class student{
    firstname:string="";
    lastname:string="";

    constructor(first,last){
         this.firstname=first;
         this.lastname=last;
    }

     display():void{
        console.log("first name= "+this.firstname)
        console.log(`last name =${this.lastname}`)     //no need to concatinate if we use ``

    }

}

let student1:student=new student('Dev','Kumar');
student1.display();