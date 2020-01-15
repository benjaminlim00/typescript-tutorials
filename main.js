"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'hello ben';
var message_long = "this is a long message: " + message;
console.log(message_long);
var myVar = '10';
//#####
// function hasName(obj: any): obj is { name: string } {
//   return !!obj && typeof obj === 'object' && 'name' in obj;
// }
// if (hasName(myVar)) {
//   console.log(myVar);
// }
//#####
// console.log(myVar)
// (gives error)
//assertion must be applied
myVar.toUpperCase();
//functions, the ? makes the param optional
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(5, 10));
// add(1,'s') (gives error)
//optional and default params
//in js, if you don't give a param, it is inserted with undefined
console.log(add(5));
//any number of optional params, but the required ones
//must come first
//functions, we are giving the default value for num2
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
//should return 20
console.log(add2(10));
// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
//using interface
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
//classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        var _this = this;
        this.greet = function () {
            console.log("Good morning " + _this.employeeName);
        };
        this.employeeName = name;
    }
    return Employee;
}());
var emp1 = new Employee('Benjamin Lim');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delagating tasks...");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Tom');
m1.delegateWork();
m1.greet();
//access modifiers
var Animal = /** @class */ (function () {
    function Animal(color, numChildren, numLegs) {
        this.color = color;
        this.numChildren = numChildren;
        this.numLegs = numLegs;
    }
    return Animal;
}());
//unable to get private var even in derived classes.
//unless we use protected.
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(color, numLegs) {
        return _super.call(this, color, 10, numLegs) || this;
    }
    return Cat;
}(Animal));
// cat1.color
var cat1 = new Cat('red', 4);
//protected parameter is accessible
console.log(cat1.numLegs);
