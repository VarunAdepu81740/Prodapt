var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Hii constructor");
    }
    Demo.prototype.display = function () {
        console.log("Hii method");
    };
    return Demo;
}());
var d = new Demo();
d.display();
