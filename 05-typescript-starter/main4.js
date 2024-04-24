var A = /** @class */ (function () {
    function A() {
        this.a = 6;
        this.b = 8;
    }
    A.prototype.addnumber = function () {
        return this.a + this.b;
    };
    return A;
}());
var a = new A();
var result = a.addnumber();
console.log(result);
