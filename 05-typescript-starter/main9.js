var sumofdigit = /** @class */ (function () {
    function sumofdigit(n) {
        this.sum = 0;
        this.num = n;
    }
    sumofdigit.prototype.getsumdigit = function () {
        while (this.num !== 0) {
            this.sum = this.sum + (this.num % 10);
            this.num = Math.floor(this.num /= 10);
        }
        console.log(this.sum);
    };
    return sumofdigit;
}());
var obj = new sumofdigit(1);
obj.getsumdigit();
