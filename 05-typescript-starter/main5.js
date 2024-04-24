var factorial = /** @class */ (function () {
    function factorial(num) {
        this.ans = 1;
        this.n = num;
    }
    factorial.prototype.fact = function () {
        for (this.i = 1; this.i <= this.n; this.i++) {
            this.ans *= this.i;
        }
    };
    factorial.prototype.display = function () {
        console.log(this.ans);
    };
    return factorial;
}());
var fac = new factorial(4);
fac.fact();
fac.display();
