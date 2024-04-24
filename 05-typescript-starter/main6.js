var table = /** @class */ (function () {
    function table(num) {
        this.i = 1;
        this.n = num;
    }
    table.prototype.print = function () {
        for (this.i; this.i <= 10; this.i++) {
            console.log(this.n + "*" + this.i + "=" + this.n * this.i);
        }
    };
    return table;
}());
var t = new table(2);
t.print();
