var student = /** @class */ (function () {
    function student(first, last) {
        this.firstname = "";
        this.lastname = "";
        this.firstname = first;
        this.lastname = last;
    }
    student.prototype.display = function () {
        console.log("first name= " + this.firstname);
        console.log("last name =".concat(this.lastname)); //no need to concatinate if we use ``
    };
    return student;
}());
var student1 = new student('Dev', 'Kumar');
student1.display();
