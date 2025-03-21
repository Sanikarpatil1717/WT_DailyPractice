var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.name = name;
        this.age = age;
    }
    Emp.prototype.display = function () {
        console.log("\nName :" + this.name);
        console.log("Age :" + this.age);
    };
    return Emp;
}());
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(name, age, salary, designation) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        _this.designation = designation;
        return _this;
    }
    Clerk.prototype.displayAll = function () {
        this.display();
        console.log("Name :" + this.salary);
        console.log("Age :" + this.designation);
    };
    return Clerk;
}(Emp));
var c1 = new Clerk("Raju", 25, 30000, "Tester");
var c2 = new Clerk("Suman", 33, 55000, "Programmer");
c1.display();
c2.displayAll();
var e1 = new Emp("Raju", 25);
e1.display();
