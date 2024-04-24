var fibnochi = /** @class */ (function () {
    function fibnochi(n) {
        this.res = 0;
        this.a = 0;
        this.b = 1;
        this.num = n;
    }
    fibnochi.prototype.print = function () {
        if (this.num == 1) {
            console.log(this.a);
        }
        if (this.num == 2) {
            console.log(this.b);
        }
        for (this.i = 2; this.i < this.num; this.i++) {
            var c = this.a + this.b;
            console.log(c);
            this.a = this.b;
            this.b = c;
        }
    };
    return fibnochi;
}());
var feb = new fibnochi(6);
feb.print();
