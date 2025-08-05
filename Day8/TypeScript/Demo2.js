var Parent = /** @class */ (function () {
    function Parent(id, name, Salary, Designation, PAN) {
        if (Designation === void 0) { Designation = "GET"; }
        //Here Designation is optional and default value is "GET" and PAN is an Optional Parameter
        console.log("ID : " + id);
        console.log("Name : " + name);
        console.log("Salary : " + Salary);
        console.log("Designation : " + Designation);
        console.log("PAN Number : " + PAN);
    }
    return Parent;
}());
var d = new Parent(1, "Varun", 40000, "Developer", 12346);
console.log("======================================");
var n = new Parent(2, "Sai", 40000);
