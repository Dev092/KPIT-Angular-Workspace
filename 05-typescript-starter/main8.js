var printi = /** @class */ (function () {
    function printi() {
        this.n = 9;
    }
    printi.prototype.print = function () {
        console.log(this.n);
    };
    return printi;
}());
var p = new printi();
p.print();
